#!/usr/bin/env python
# -*- coding: utf-8 -*-

def make_prime_data(json_dict):
    prime_data = {}
    prime_data["updateDate"] = json_dict["updateDate"]
    prime_data["tables"] = []
    
    for name in json_dict["names"]:
        prime = {}
        prime["name"] = name.replace(" Prime", "")
        prime["parts"] = []

        parts_list = json_dict[name]
        for part in parts_list:
            parts = {}
            parts["name"] = part[0].replace(name + " ", "")
            parts["relics"] = []

            relic_list = part[1]
            for relic in relic_list:
                relics = {}
                relics["name"] = relic[0]
                relics["rarity"] = relic[1]
                if relic[0] in json_dict["relics"]:
                    relics["isInVault"] = False
                else:
                    relics["isInVault"] = True
                parts["relics"].append(relics)
            prime["parts"].append(parts)
        prime_data["tables"].append(prime)

    return prime_data


def main(json_dict):
    print("prime dict 作成開始")
    prime_dict = make_prime_data(json_dict)
    print("prime dict 作成終了")
    return prime_dict
