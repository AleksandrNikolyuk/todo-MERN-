import { mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import * as Actions from './index';


const addSearchItem = (action$, state$) =>  action$.pipe(
    ofType('CLICK_INCREMENT'),
    mergeMap(async(action) => {
        const stateItems = await state$.value.items.map(item => item.content)
        const searchUser = await stateItems.filter(e => e == action.data)
        return Object.assign({}, action, { type: Actions.ADD_SEARCH, payload: searchUser });
  }),
)

export default addSearchItem
