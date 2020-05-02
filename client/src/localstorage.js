export const saveState = ( state ) =>{
    if( state !== undefined && state !== null){
        localStorage.setItem( 'todostate', JSON.stringify(state ));
    }
}


export const loadState = () => {
    try {
        const state = localStorage.getItem('todostate');
        if( state === null ){
            return null;
        }
        return JSON.parse( state );
    } catch (error) {
        return null;
    }
}