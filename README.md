# subqls

endpoint: https://herotestnet.heroesofnft.com:443

network:
  endpoint: "https://herotestnet.heroesofnft.com"
  chainId: "fuji"
  subnet: "2kdzD7eps9QRC449zypVGBbrzkwFrefLzmt24tS8MxmvEBuWvP"



network:
  endpoint: "http://avalanche.api.onfinality.io:9650"
  chainId: "mainnet"
  subnet: "C"


## Build & Deploy
subql codegen
subql build
subql publish

subql deploy:deploy --org=heroesofnft --project_name=revenge
