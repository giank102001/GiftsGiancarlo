import { useState } from 'react';


export const AddCategory = ({ onNewCategory }:any) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }:any) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event:any ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;
        setInputValue('');
        onNewCategory( inputValue.trim() );
    }

    return (
        <form onSubmit={ onSubmit } className="items-center justify-center flex p-4">
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
                className="appearance-none rounded-none relative block w-2/4 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
        </form>

        
    )
}
