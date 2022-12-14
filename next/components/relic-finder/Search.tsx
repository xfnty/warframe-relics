import { useState, VFC } from 'react';

type Props = {
  handleChangeKeyword: (keyword: string) => void;
};

const Search: VFC<Props> = ({ handleChangeKeyword }): JSX.Element => {
  const [keyword, setKeyword] = useState<string>('');

  return (
    <input
      className="border-1-gray w-56 rounded bg-[#222] p-2 text-base sm:w-72"
      type="text"
      placeholder="e.g. ash"
      value={keyword}
      onChange={(e) => {
        setKeyword(e.target.value);
        handleChangeKeyword(e.target.value);
      }}
    />
  );
};

export default Search;
