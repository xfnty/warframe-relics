#!/usr/bin/env python
# -*- coding: utf-8 -*-

import re


def make_list(trs, lst):
    relic_name = ""
    flg = False
    for item in trs:
        tds = item.findAll("td")
        for td in tds:
            tmp = td.get_text()
            r = re.compile("(.*)(?= Relic)")
            match = r.search(tmp)

            # relicが報酬じゃない場合は何もしない
            if match is None:
                continue

            relic_name = match.group(0)

            # リストに存在するrelicの場合は何もしない
            if relic_name in lst:
                continue

            # リストに追加
            lst.append(relic_name)

    return


def main(bs_obj):
    print("relic list 作成開始")
    h3s = bs_obj.find_all("h3", id=re.compile("^(?!relicRewards).*$"))

    relic_names = []
    for h3 in h3s:
        tbl = None
        for item in h3.next_siblings:
            if item.name == "table":
                tbl = item
                break

        if tbl is not None:
            # table内のtr要素を抽出
            trs = tbl.findAll("tr")

            # リストをつくる
            make_list(trs, relic_names)

    # 辞書をつくる
    relic_names.sort()

    print("relic list 作成終了")
    return relic_names
