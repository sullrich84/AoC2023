export type Puzzle = {
  seeds: number[]
  "seed_to_soil": { dest: number; source: number; len: number }[]
  "soil_to_fertilizer": { dest: number; source: number; len: number }[]
  "fertilizer_to_water": { dest: number; source: number; len: number }[]
  "water_to_light": { dest: number; source: number; len: number }[]
  "light_to_temperature": { dest: number; source: number; len: number }[]
  "temperature_to_humidity": { dest: number; source: number; len: number }[]
  "humidity_to_location": { dest: number; source: number; len: number }[]
}

export const sample: Puzzle = {
  seeds: [79, 14, 55, 13],
  "seed_to_soil": [
    { dest: 50, source: 98, len: 2 },
    { dest: 52, source: 50, len: 48 },
  ],
  "soil_to_fertilizer": [
    { dest: 0, source: 15, len: 37 },
    { dest: 37, source: 52, len: 2 },
    { dest: 39, source: 0, len: 15 },
  ],
  "fertilizer_to_water": [
    { dest: 49, source: 53, len: 8 },
    { dest: 0, source: 11, len: 42 },
    { dest: 42, source: 0, len: 7 },
    { dest: 57, source: 7, len: 4 },
  ],
  "water_to_light": [
    { dest: 88, source: 18, len: 7 },
    { dest: 18, source: 25, len: 70 },
  ],
  "light_to_temperature": [
    { dest: 45, source: 77, len: 23 },
    { dest: 81, source: 45, len: 19 },
    { dest: 68, source: 64, len: 13 },
  ],
  "temperature_to_humidity": [
    { dest: 0, source: 69, len: 1 },
    { dest: 1, source: 0, len: 69 },
  ],
  "humidity_to_location": [
    { dest: 60, source: 56, len: 37 },
    { dest: 56, source: 93, len: 4 },
  ],
}

export const data: Puzzle = {
  seeds: [
    364807853,
    408612163,
    302918330,
    20208251,
    1499552892,
    200291842,
    3284226943,
    16030044,
    2593569946,
    345762334,
    3692780593,
    17215731,
    1207118682,
    189983080,
    2231594291,
    72205975,
    3817565407,
    443061598,
    2313976854,
    203929368,
  ],
  "seed_to_soil": [
    { dest: 2069473506, source: 3732587455, len: 1483883 },
    { dest: 3235691256, source: 2348990120, len: 6550341 },
    { dest: 3547561069, source: 1392195671, len: 747406227 },
    { dest: 3264251584, source: 3734071338, len: 283309485 },
    { dest: 391285622, source: 257757572, len: 195552540 },
    { dest: 1645243555, source: 3166958320, len: 377191689 },
    { dest: 335002083, source: 512210869, len: 56283539 },
    { dest: 3242241597, source: 897735089, len: 22009987 },
    { dest: 77244511, source: 0, len: 257757572 },
    { dest: 989159646, source: 4172023334, len: 122943962 },
    { dest: 605476380, source: 3544150009, len: 188437446 },
    { dest: 0, source: 568494408, len: 18343754 },
    { dest: 2700122696, source: 4050276683, len: 121746651 },
    { dest: 2022435244, source: 2139601898, len: 47038262 },
    { dest: 2227672101, source: 919745076, len: 95840269 },
    { dest: 1112103608, source: 2633818373, len: 533139947 },
    { dest: 826809686, source: 2186640160, len: 162349960 },
    { dest: 3100147259, source: 762191092, len: 135543997 },
    { dest: 18343754, source: 453310112, len: 58900757 },
    { dest: 2323512370, source: 1015585345, len: 282396986 },
    { dest: 2605909356, source: 1297982331, len: 94213340 },
    { dest: 2821869347, source: 2355540461, len: 278277912 },
    { dest: 793913826, source: 4017380823, len: 32895860 },
    { dest: 2070957389, source: 605476380, len: 156714712 },
  ],
  "soil_to_fertilizer": [
    { dest: 2700214958, source: 2743391193, len: 363795571 },
    { dest: 1484584575, source: 1440072796, len: 24660284 },
    { dest: 927520818, source: 435059068, len: 191969051 },
    { dest: 1588488926, source: 1434420334, len: 5652462 },
    { dest: 1423277199, source: 141187887, len: 5443857 },
    { dest: 1594141388, source: 1350997453, len: 83422881 },
    { dest: 1986188257, source: 3933008893, len: 120750463 },
    { dest: 1509244859, source: 146631744, len: 79093544 },
    { dest: 3712482038, source: 4220862006, len: 74105290 },
    { dest: 3948206286, source: 1986188257, len: 277570873 },
    { dest: 291046304, source: 281588807, len: 153470261 },
    { dest: 1119489869, source: 918224946, len: 303787330 },
    { dest: 1677564269, source: 1321192605, len: 29804848 },
    { dest: 2309878676, source: 2336743687, len: 390336282 },
    { dest: 3079951473, source: 3306332300, len: 449116691 },
    { dest: 444516565, source: 1222012276, len: 99180329 },
    { dest: 543696894, source: 1464733080, len: 383823924 },
    { dest: 3895169406, source: 3771389935, len: 53036880 },
    { dest: 3529068164, source: 4053759356, len: 167102650 },
    { dest: 0, source: 627178642, len: 291046304 },
    { dest: 3696170814, source: 2727079969, len: 16311224 },
    { dest: 3855550220, source: 3824426815, len: 39619186 },
    { dest: 2106938720, source: 3107186764, len: 199145536 },
    { dest: 1428721056, source: 225725288, len: 55863519 },
    { dest: 1707369117, source: 0, len: 64378064 },
    { dest: 1771747181, source: 64378064, len: 76809823 },
    { dest: 3064010529, source: 3755448991, len: 15940944 },
    { dest: 2306084256, source: 2332949267, len: 3794420 },
    { dest: 4225777159, source: 2263759130, len: 69190137 },
    { dest: 3786587328, source: 3864046001, len: 68962892 },
    { dest: 1588338403, source: 627028119, len: 150523 },
  ],
  "fertilizer_to_water": [
    { dest: 2299879115, source: 39069388, len: 7889905 },
    { dest: 514481680, source: 504392888, len: 101474410 },
    { dest: 3448524168, source: 0, len: 25428313 },
    { dest: 13641075, source: 1832356728, len: 472401611 },
    { dest: 0, source: 25428313, len: 13641075 },
    { dest: 1842445520, source: 108629584, len: 395763304 },
    { dest: 486042686, source: 3445513487, len: 28438994 },
    { dest: 2307769020, source: 2304758339, len: 1140755148 },
    { dest: 2238208824, source: 46959293, len: 61670291 },
    { dest: 615956090, source: 605867298, len: 1226489430 },
  ],
  "water_to_light": [
    { dest: 1318826171, source: 2010420436, len: 223477535 },
    { dest: 2278894745, source: 2233897971, len: 671603259 },
    { dest: 988189854, source: 447584401, len: 27746374 },
    { dest: 2132052210, source: 300741866, len: 146842535 },
    { dest: 0, source: 1279660741, len: 97125596 },
    { dest: 3531244480, source: 3147213622, len: 507810286 },
    { dest: 257581844, source: 3816963790, len: 101424269 },
    { dest: 1298609589, source: 3918388059, len: 20216582 },
    { dest: 3317726838, source: 1072550929, len: 21856732 },
    { dest: 3065323607, source: 1254863909, len: 4121973 },
    { dest: 97125596, source: 1094407661, len: 160456248 },
    { dest: 359006113, source: 1057194484, len: 15356445 },
    { dest: 374362558, source: 1636971609, len: 104335413 },
    { dest: 4039054766, source: 475330775, len: 9209679 },
    { dest: 1038424317, source: 1376786337, len: 260185272 },
    { dest: 878530050, source: 3938604641, len: 109659804 },
    { dest: 1784016098, source: 3738041092, len: 78922698 },
    { dest: 3152462764, source: 0, len: 165264074 },
    { dest: 1862938796, source: 1741307022, len: 269113414 },
    { dest: 497536930, source: 676201364, len: 380993120 },
    { dest: 3069445580, source: 3655023908, len: 83017184 },
    { dest: 2950498004, source: 165264074, len: 114825603 },
    { dest: 1015936228, source: 1258985882, len: 1835900 },
    { dest: 478697971, source: 1260821782, len: 18838959 },
    { dest: 1017772128, source: 280089677, len: 20652189 },
    { dest: 1542303706, source: 2905501230, len: 241712392 },
    { dest: 3339583570, source: 484540454, len: 191660910 },
  ],
  "light_to_temperature": [
    { dest: 2827696039, source: 489007811, len: 183207687 },
    { dest: 1480301347, source: 3744628626, len: 306791400 },
    { dest: 695239418, source: 130668965, len: 358338846 },
    { dest: 1297125534, source: 2232912413, len: 183175813 },
    { dest: 3979319170, source: 1917264287, len: 315648126 },
    { dest: 3010903726, source: 948848843, len: 968415444 },
    { dest: 130668965, source: 2663473525, len: 564570453 },
    { dest: 1053578264, source: 4051420026, len: 243547270 },
    { dest: 2303677395, source: 672215498, len: 276633345 },
    { dest: 1787092747, source: 3228043978, len: 516584648 },
    { dest: 2580310740, source: 2416088226, len: 247385299 },
  ],
  "temperature_to_humidity": [
    { dest: 4161466647, source: 3871737509, len: 133500649 },
    { dest: 2423686895, source: 2864370860, len: 72123408 },
    { dest: 1983529997, source: 0, len: 320533964 },
    { dest: 3184295196, source: 2695571092, len: 41928210 },
    { dest: 0, source: 822932241, len: 605870242 },
    { dest: 3557076981, source: 3267347843, len: 604389666 },
    { dest: 3226223406, source: 2936494268, len: 330853575 },
    { dest: 2495810303, source: 2737499302, len: 126871558 },
    { dest: 1108268519, source: 1428802483, len: 491674128 },
    { dest: 605870242, source: 320533964, len: 502398277 },
    { dest: 2622681861, source: 2423686895, len: 271884197 },
    { dest: 2894566058, source: 4005238158, len: 289729138 },
    { dest: 1599942647, source: 1920476611, len: 383587350 },
  ],
  "humidity_to_location": [
    { dest: 2945628300, source: 1864953738, len: 334378942 },
    { dest: 3467273713, source: 3579654586, len: 715312710 },
    { dest: 975015905, source: 1356290883, len: 508662855 },
    { dest: 1483678760, source: 2498980024, len: 1080674562 },
    { dest: 3443998409, source: 2199332680, len: 23275304 },
    { dest: 3280007242, source: 2222607984, len: 163991167 },
    { dest: 4182586423, source: 2386599151, len: 112380873 },
    { dest: 2564353322, source: 975015905, len: 381274978 },
  ],
}