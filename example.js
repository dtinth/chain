const chain = require('./lib')

const input = [
  { time: 15653803737, reading: 948 },
  { time: 43300604355, reading: 101 },
  { time: 44719566576, reading: 126 },
  { time: 50611062674, reading: 643 },
  { time: 108782421201, reading: 662 },
  { time: 111991333266, reading: 167 },
  { time: 116093283057, reading: 279 },
  { time: 122590797545, reading: 548 },
  { time: 167084528190, reading: 83 },
  { time: 175865693509, reading: 209 },
  { time: 178903172001, reading: 249 },
  { time: 179927067850, reading: 188 },
  { time: 201095050659, reading: 912 },
  { time: 220210747113, reading: 46 },
  { time: 220932551934, reading: 446 },
  { time: 301061479353, reading: 711 },
  { time: 311940926247, reading: 213 },
  { time: 354073612906, reading: 39 },
  { time: 375436884485, reading: 62 },
  { time: 382615262824, reading: 254 },
  { time: 387961035457, reading: 883 },
  { time: 405533865803, reading: 103 },
  { time: 406498336012, reading: 36 },
  { time: 415800530096, reading: 258 },
  { time: 418011936976, reading: 916 },
  { time: 426672846047, reading: 31 },
  { time: 449947997064, reading: 247 },
  { time: 457606719453, reading: 419 },
  { time: 458785147612, reading: 125 },
  { time: 472135434611, reading: 437 },
  { time: 482332300289, reading: 792 },
  { time: 492435915080, reading: 822 },
  { time: 534701095879, reading: 159 },
  { time: 582062000587, reading: 48 },
  { time: 596194342733, reading: 953 },
  { time: 596533437605, reading: 207 },
  { time: 599216122929, reading: 347 },
  { time: 614967978771, reading: 204 },
  { time: 623939522009, reading: 236 },
  { time: 634497424084, reading: 196 },
  { time: 647503022680, reading: 56 },
  { time: 648843982718, reading: 659 },
  { time: 662386632455, reading: 253 },
  { time: 706268350220, reading: 312 },
  { time: 724884751539, reading: 312 },
  { time: 748707506608, reading: 835 },
  { time: 777377397333, reading: 724 },
  { time: 788922497780, reading: 975 },
  { time: 792527288748, reading: 788 },
  { time: 792859120750, reading: 507 },
  { time: 796643775954, reading: 301 },
  { time: 822578735552, reading: 536 },
  { time: 838281140889, reading: 130 },
  { time: 844817754505, reading: 500 },
  { time: 844961194347, reading: 332 },
  { time: 856265046847, reading: 468 },
  { time: 915140350384, reading: 541 },
  { time: 923954645691, reading: 652 },
  { time: 982551416620, reading: 837 },
  { time: 986228867586, reading: 794 },
  { time: 1019754472576, reading: 81 },
  { time: 1040745010171, reading: 990 },
  { time: 1049359316289, reading: 678 },
  { time: 1051323344873, reading: 77 },
  { time: 1068877445966, reading: 560 },
  { time: 1072440369113, reading: 405 },
  { time: 1075659599036, reading: 857 },
  { time: 1085435682913, reading: 457 },
  { time: 1088228744825, reading: 451 },
  { time: 1092789092601, reading: 428 },
  { time: 1101130686093, reading: 253 },
  { time: 1130414551448, reading: 811 },
  { time: 1142383216250, reading: 38 },
  { time: 1161341421994, reading: 605 },
  { time: 1165614275921, reading: 592 },
  { time: 1212622020498, reading: 371 },
  { time: 1227897857898, reading: 182 },
  { time: 1251901391899, reading: 471 },
  { time: 1264425214622, reading: 887 },
  { time: 1279363532831, reading: 577 },
  { time: 1281590469131, reading: 588 },
  { time: 1283755500187, reading: 428 },
  { time: 1291619859670, reading: 312 },
  { time: 1294475814088, reading: 121 },
  { time: 1339515070357, reading: 987 },
  { time: 1349687775182, reading: 394 },
  { time: 1355313376571, reading: 684 },
  { time: 1382039404196, reading: 125 },
  { time: 1392300890597, reading: 882 },
  { time: 1414409020058, reading: 209 },
  { time: 1449831828288, reading: 875 },
  { time: 1451404141561, reading: 633 },
  { time: 1469738228666, reading: 303 },
  { time: 1471039382500, reading: 471 },
  { time: 1478849193385, reading: 487 },
  { time: 1483375759320, reading: 106 },
  { time: 1486399032207, reading: 462 },
  { time: 1501990543593, reading: 944 },
  { time: 1525209752479, reading: 605 },
  { time: 1542059237224, reading: 918 },
]

const groupBy = require('lodash/groupBy')
const sumBy = require('lodash/sumBy')
const map = require('lodash/map')
const sortBy = require('lodash/sortBy')

console.log(
  chain(input)
    .thru((Φ) => groupBy(Φ, (r) => new Date(r.time).getUTCDay()))
    .thru((Φ) => map(Φ, (φ, key) => ({ x: +key, y: sumBy(φ, 'reading') })))
    .thru((Φ) => sortBy(Φ, 'x'))
    .value(),
)
