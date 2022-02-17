import { useCallback, useState } from 'react';

type TypeOnOffTable = {
  [name: string]: boolean;
};

export type TypeRelic = {
  name: string;
  rarity: string;
  isInVault: boolean;
};

export type TypePrimePart = {
  name: string;
  relics: TypeRelic[];
};

export type TypePrimeItem = {
  name: string;
  parts: TypePrimePart[];
};

const useOnOffTable = (
  tables: TypePrimeItem[],
): [
  onOffTable: TypeOnOffTable,
  setOnOff: (key: string) => void,
  handleChangeKeyword: (keyword: string) => void,
] => {
  const [onOffTable, setOnOffTable] = useState<TypeOnOffTable>(() => {
    let tmp: TypeOnOffTable = {};
    tables.forEach((value) => {
      tmp[value.name] = false;
    });
    return tmp;
  });

  /**
   * 指定されたkeyの値をtoggle
   * ボタンクリック時に使う
   */
  const setOnOff = useCallback((key: string): void => {
    setOnOffTable((prev) => {
      let tmp = { ...prev };
      tmp[key] = !tmp[key];
      return tmp;
    });
  }, []);

  /**
   * 検索ボックスの値変更時の処理
   */
  const handleChangeKeyword = useCallback((keyword: string): void => {
    setOnOffTable((prev) => {
      let tmp = { ...prev };
      const re: RegExp | false = keyword
        ? new RegExp(`.*${keyword}.*`, 'i')
        : false;

      Object.keys(tmp).forEach((key) => {
        if (re && re.test(key)) {
          // 無駄なレンダリングを抑えるため既にtrueの場合は何もしない
          if (tmp[key] == false) {
            tmp[key] = true;
          }
        } else {
          // 無駄なレンダリングを抑えるため既にfalseの場合は何もしない
          if (tmp[key] == true) {
            tmp[key] = false;
          }
        }
      });

      return tmp;
    });
  }, []);

  return [onOffTable, setOnOff, handleChangeKeyword];
};

export default useOnOffTable;
