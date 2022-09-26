/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React, {
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Cryptocurrency, cryptocurrenciesList } from '../../../currencies/cryptocurrencies';
import searchIcon from '../../../assets/search.svg';
import closeIcon from '../../../assets/close.svg';
import './styles.scss';
import { UserContext } from '../../../context/userContext';

type SearchBarProps = {
  placeholder: string,
  data: Cryptocurrency[],
}

const SearchBar = ({ placeholder, data }: SearchBarProps) => {
  const { setCryptocurrency } = useContext(UserContext);

  const [filteredData, setFilteredData] = useState<Cryptocurrency[]>([]);
  const [isActive, setIsActive] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current!.focus();
  }, [isActive]);

  const filterHandler = (event: any) => {
    const searchValue = event.target.value;

    const newFilter = data.filter((value) => (
      value.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      || value.symbol.includes(searchValue.toLocaleLowerCase())
    ));

    if (searchValue === '') {
      setFilteredData(cryptocurrenciesList);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div className="search-bar">
      <div
        aria-hidden="true"
        className="search-bar__placeholder"
        onClick={() => {
          setIsActive(true);
        }}
      >
        <div className="search-bar__search-icon">
          <img src={searchIcon} alt="search-icon" />
        </div>
        <p className="search-bar__placeholder-text">{placeholder}</p>
      </div>
      <div
        className="search-bar__popup"
        style={isActive ? { display: 'block' } : { display: 'none' }}
      >
        <div className="search-bar__inputs">
          <div className="search-bar__search-icon">
            <img src={searchIcon} alt="search-icon" />
          </div>
          <input
            type="text"
            ref={inputRef}
            placeholder={placeholder}
            onChange={filterHandler}
          />
          <div
            aria-hidden="true"
            className="search-bar__close-icon"
            onClick={() => setIsActive(false)}
          >
            <img src={closeIcon} alt="close-icon" />
          </div>
        </div>
        {filteredData.length !== 0 && (
          <div className="search-bar__data-result">
            {filteredData.slice(0, 15).map((value) => (
              <div
                aria-hidden="true"
                className="search-bar__data-item"
                onClick={() => {
                  setCryptocurrency(
                    cryptocurrenciesList.find((cryptocurrency) => cryptocurrency.id === value.id)!,
                  );
                  setIsActive(false);
                }}
              >
                <img
                  className="search-bar__currency-icon"
                  src={require(`/node_modules/cryptocurrency-icons/128/color/${value.symbol}.png`)}
                  alt={`${value.id}-icon`}
                />
                {`${value.name} (${value.symbol.toUpperCase()})`}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
