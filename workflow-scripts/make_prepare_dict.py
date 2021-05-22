#!/usr/bin/env python
# -*- coding: utf-8 -*-

import re


def get_rarity(text):
    """
    Common   : 25.33%
    Uncommon : 11.00%
    Rare     : 2.00%
    """
    if text.find("25.33") > -1:
        result = "C"
    elif text.find("11.00") > -1:
        result = "UC"
    else:
        result = "R"

    return result


def get_index(lst, val):
    result = -1

    i = 0
    for item in lst:
        if item[0] == val:
            result = i
        i += 1

    return result


def make_list(trs):
    relic_names = []
    relic_name = ""
    prime_parts = []
    flg = False
    i = 0
    for item in trs:
        th = item.find("th", {"colspan": 2})
        # th要素の場合
        # レリック名を抽出し初出の場合はflgをTrueにする
        if th:
            tmp = th.get_text()
            r = re.compile("(.*)(?= Relic)")
            match = r.search(tmp)

            if match is None:
                flg = False
                continue

            # リストに存在するrelicの場合は何もしない
            if match.group(0) in relic_names:
                flg = False
                continue

            flg = True
            relic_name = match.group(0)
            relic_names.append(relic_name)
        # th要素ではない場合（td要素の場合）
        else:
            if flg is False:
                continue

            td = item.findAll("td")
            if td and len(td) == 2:
                parts_name = td[0].get_text()
                rarity = get_rarity(td[1].get_text())

                idx = get_index(prime_parts, parts_name)
                if idx < 0:
                    prime_parts.append([parts_name, [(relic_name, rarity)]])
                else:
                    prime_parts[idx][1].append((relic_name, rarity))

    prime_parts.sort()
    return prime_parts


def make_dict(lst):
    # プライムパーツの名前だけのリスト作成
    names = []
    for item in lst:
        names.append(item[0])

    # 武器名、フレーム名だけのリスト作成
    primes_tmp = []
    primes = []
    r = re.compile(".* Prime")
    for item in names:
        match = r.search(item)
        if match is not None:
            primes_tmp.append(match.group(0))
    primes = list(set(primes_tmp)) # 重複を削除
    primes.sort() # ソート

    result = {}
    for item in lst:
        for prime in primes:
            if item[0].find(prime) > -1:
                # keyが存在しない場合は作成
                if prime not in result.keys():
                    result[prime] = []
                # リストに追加
                result[prime].append(item)
                break

    result["names"] = primes
    return result


def main(bs_obj):
    print("prepare dict 作成開始")
    h3 = bs_obj.find("h3", id="relicRewards")

    # relicRewardsのtableを取得
    tableRelic = None
    for item in h3.next_siblings:
        if item.name == "table":
            tableRelic = item
            break

    # table内のtr要素を抽出
    trs = tableRelic.findAll("tr")

    # リストをつくる
    prime_parts = make_list(trs)

    # 辞書をつくる
    prime_dict = make_dict(prime_parts)

    print("prepare dict 作成終了")
    return prime_dict


if __name__ == "__main__":
    main()
