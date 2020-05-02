import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ScrollArea from 'react-scrollbar';
import { withStyles } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import { BehaviorSubject, from } from 'rxjs'
import { filter, debounceTime, distinctUntilChanged, mergeMap } from 'rxjs/operators';
import {
	TodoTextfield,
} from '../../@todo';

const styles = () => ({
	root: {
		width: '100%',
		padding: '20px',
		display: 'flex',
		flexDirection: 'column',
	},
	inputBlock: {
		height: '60px',
		marginBottom: '10px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	editField: {
		width: '300px',
	},
	result: {
		listStyleType: 'none',
		fontSize: '24px',
		color: 'blue',
    },
    title: {
		fontSize: '18px',
	},
});

const getPokemon = async name => {
    const { results: allPokemon } = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1000').then(res => res.json())
    return allPokemon.filter(pokemon => pokemon.name.includes(name))
}

let searchSubject = new BehaviorSubject('');
let searchResultObservable = searchSubject.pipe(
    filter(val => val.length > 1),
    debounceTime(750),
    distinctUntilChanged(),
    mergeMap(val => from(getPokemon(val)))
)

const useObservable = (observable, setter) => {
    useEffect(() => {
        let subscription = observable.subscribe(result => {
            setter(result)
        })
        return () => subscription.unsubscribe()
    }, [observable, setter])
}

function TodoSearchPokemon({
	t,
	classes,
}) {

	const [searchPokemon, setSearchPokemon] = useState('')
    const [results, setResults] = useState([])
    
    useObservable(searchResultObservable, setResults)

	const handleAddItem = e => {
        setSearchPokemon(e.target.value);
        searchSubject.next(e.target.value)
	};

	return (
		<div className={classes.root}>
			<h1 className={classes.title}>{t('searchApi')}</h1>
			<div className={classes.inputBlock}>
				<div className={classes.editField}>
					<TodoTextfield
						value={searchPokemon}
						handlerChange={handleAddItem}
						label={t('user')}
					/>
				</div>
			</div>
			<ScrollArea>
            <div
                className={classes.result}
            >
                {results.map(pokemon => (
                    <div key={pokemon.name}>{pokemon.name}</div>
                ))}
            </div>
			</ScrollArea>
		</div>
	);
}

TodoSearchPokemon.defaultProps = {
	value: '',
};

TodoSearchPokemon.propTypes = {
	handler: PropTypes.func,
	t: PropTypes.func,
	value: PropTypes.string,
	classes: PropTypes.object,
};

export default withTranslation()(withStyles(styles, { withTheme: true })(TodoSearchPokemon));
