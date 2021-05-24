import React, {useState} from 'react'
import Unit from './Unit'

import locationFunction from '/src/api/location.js'

const Search = (props) => {

  let [searchDivClass, setSearchClass] = useState('search-bar-full');
  let [inputClass, setInputClass] = useState('location-input');
  let [searchIconClass, setSearchIconClass] = useState(
    'fas fa-search search-icon',
  );

  const resetClasses = () => {
    setSearchClass('search-bar-full');
    setInputClass('location-input');
    setSearchIconClass('fas fa-search search-icon');
  };

  document.addEventListener('click', (e) => {
    if (e.target.toString() !== '[object HTMLInputElement]') {
      resetClasses();
    }
  });
  
  return (
    <nav className="nav">
          <div className={searchDivClass}>
            <i className={searchIconClass}></i>
            <form
              onSubmit={(e) => {
                const input = document.querySelector('.search-input-big');
                let location = input.value;
                location = location.charAt(0).toUpperCase() + location.slice(1)
                e.preventDefault();
                props.setLocation(location);
                
                props.dataRender(location)
                locationFunction.setLocation(location);
                input.value = '';
              }}
              className="search-form"
            >
              <input
                className={inputClass}
                name="query"
                placeholder="Find Location"
                autoComplete="off"
                type="text"
                onClick={() => {
                  setSearchClass('search-bar-full-big');
                  setInputClass('search-input-big');
                  setSearchIconClass('fas fa-search search-icon-big');
                }}
              ></input>
            </form>
          </div>
          <Unit dataRender={props.dataRender}/>
        </nav>
  )
}
export default Search;