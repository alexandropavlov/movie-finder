const isoCountries = {
    'AF' : 'Афганистан',
    'AX' : 'Аландские острова',
    'AL' : 'Албания',
    'DZ' : 'Алжир',
    'AS' : 'Американское Самоа',
    'AD' : 'Андорра',
    'AO' : 'Ангола',
    'AI' : 'Ангилья',
    'AQ' : 'Антарктида',
    'AG' : 'Антигуа и Барбуда',
    'AR' : 'Аргентина',
    'AM' : 'Армения',
    'AW' : 'Аруба',
    'AU' : 'Австралия',
    'AT' : 'Австрия',
    'AX' : 'Аландские острова',
    'AZ' : 'Азербайджан',
    'BS' : 'Багамы',
    'BH' : 'Бахрейн',
    'BD' : 'Бангладеш',
    'BB' : 'Барбадос',
    'BY' : 'Белоруссия',
    'BE' : 'Бельгия',
    'BZ' : 'Белиз',
    'BJ' : 'Бенин',
    'BM' : 'Бермуды',
    'BT' : 'Бутан',
    'BO' : 'Боливия',
    'BA' : 'Босния и Герцеговина',
    'BW' : 'Ботсвана',
    'BV' : 'Остров Буве',
    'BR' : 'Бразилия',
    'IO' : 'Британская территория в Индийском океане',
    'BN' : 'Бруней',
    'BG' : 'Болгария',
    'BF' : 'Буркина-Фасо',
    'BI' : 'Burundi',
    'KH' : 'Cambodia',
    'CM' : 'Cameroon',
    'CA' : 'Canada',
    'CV' : 'Cape Verde',
    'KY' : 'Cayman Islands',
    'CF' : 'Central African Republic',
    'TD' : 'Chad',
    'CL' : 'Chile',
    'CN' : 'China',
    'CX' : 'Christmas Island',
    'CC' : 'Cocos (Keeling) Islands',
    'CO' : 'Colombia',
    'KM' : 'Comoros',
    'CG' : 'Congo',
    'CD' : 'Congo, Democratic Republic',
    'CK' : 'Cook Islands',
    'CR' : 'Costa Rica',
    'CI' : 'Cote D\'Ivoire',
    'HR' : 'Croatia',
    'CU' : 'Cuba',
    'CY' : 'Cyprus',
    'CZ' : 'Czech Republic',
    'DK' : 'Denmark',
    'DJ' : 'Djibouti',
    'DM' : 'Dominica',
    'DO' : 'Dominican Republic',
    'EC' : 'Ecuador',
    'EG' : 'Egypt',
    'SV' : 'El Salvador',
    'GQ' : 'Equatorial Guinea',
    'ER' : 'Eritrea',
    'EE' : 'Estonia',
    'ET' : 'Ethiopia',
    'FK' : 'Falkland Islands (Malvinas)',
    'FO' : 'Faroe Islands',
    'FJ' : 'Fiji',
    'FI' : 'Finland',
    'FR' : 'France',
    'GF' : 'French Guiana',
    'PF' : 'French Polynesia',
    'TF' : 'French Southern Territories',
    'GA' : 'Gabon',
    'GM' : 'Gambia',
    'GE' : 'Georgia',
    'DE' : 'Germany',
    'GH' : 'Ghana',
    'GI' : 'Gibraltar',
    'GR' : 'Greece',
    'GL' : 'Greenland',
    'GD' : 'Grenada',
    'GP' : 'Guadeloupe',
    'GU' : 'Guam',
    'GT' : 'Guatemala',
    'GG' : 'Guernsey',
    'GN' : 'Guinea',
    'GW' : 'Guinea-Bissau',
    'GY' : 'Guyana',
    'HT' : 'Haiti',
    'HM' : 'Heard Island & Mcdonald Islands',
    'VA' : 'Holy See (Vatican City State)',
    'HN' : 'Honduras',
    'HK' : 'Hong Kong',
    'HU' : 'Hungary',
    'IS' : 'Iceland',
    'IN' : 'India',
    'ID' : 'Indonesia',
    'IR' : 'Iran, Islamic Republic Of',
    'IQ' : 'Iraq',
    'IE' : 'Ireland',
    'IM' : 'Isle Of Man',
    'IL' : 'Israel',
    'IT' : 'Italy',
    'JM' : 'Jamaica',
    'JP' : 'Japan',
    'JE' : 'Jersey',
    'JO' : 'Jordan',
    'KZ' : 'Kazakhstan',
    'KE' : 'Kenya',
    'KI' : 'Kiribati',
    'KR' : 'Korea',
    'KW' : 'Kuwait',
    'KG' : 'Kyrgyzstan',
    'LA' : 'Lao People\'s Democratic Republic',
    'LV' : 'Latvia',
    'LB' : 'Lebanon',
    'LS' : 'Lesotho',
    'LR' : 'Liberia',
    'LY' : 'Libyan Arab Jamahiriya',
    'LI' : 'Liechtenstein',
    'LT' : 'Lithuania',
    'LU' : 'Luxembourg',
    'MO' : 'Macao',
    'MK' : 'Macedonia',
    'MG' : 'Madagascar',
    'MW' : 'Malawi',
    'MY' : 'Malaysia',
    'MV' : 'Maldives',
    'ML' : 'Mali',
    'MT' : 'Malta',
    'MH' : 'Marshall Islands',
    'MQ' : 'Martinique',
    'MR' : 'Mauritania',
    'MU' : 'Mauritius',
    'YT' : 'Mayotte',
    'MX' : 'Mexico',
    'FM' : 'Micronesia, Federated States Of',
    'MD' : 'Moldova',
    'MC' : 'Monaco',
    'MN' : 'Mongolia',
    'ME' : 'Montenegro',
    'MS' : 'Montserrat',
    'MA' : 'Morocco',
    'MZ' : 'Mozambique',
    'MM' : 'Myanmar',
    'NA' : 'Namibia',
    'NR' : 'Nauru',
    'NP' : 'Nepal',
    'NL' : 'Netherlands',
    'AN' : 'Netherlands Antilles',
    'NC' : 'New Caledonia',
    'NZ' : 'New Zealand',
    'NI' : 'Nicaragua',
    'NE' : 'Niger',
    'NG' : 'Nigeria',
    'NU' : 'Niue',
    'NF' : 'Norfolk Island',
    'MP' : 'Northern Mariana Islands',
    'NO' : 'Norway',
    'OM' : 'Oman',
    'PK' : 'Pakistan',
    'PW' : 'Palau',
    'PS' : 'Palestinian Territory, Occupied',
    'PA' : 'Panama',
    'PG' : 'Papua New Guinea',
    'PY' : 'Paraguay',
    'PE' : 'Peru',
    'PH' : 'Philippines',
    'PN' : 'Pitcairn',
    'PL' : 'Poland',
    'PT' : 'Portugal',
    'PR' : 'Puerto Rico',
    'QA' : 'Qatar',
    'RE' : 'Reunion',
    'RO' : 'Romania',
    'RU' : 'Russian Federation',
    'RW' : 'Rwanda',
    'BL' : 'Saint Barthelemy',
    'SH' : 'Saint Helena',
    'KN' : 'Saint Kitts And Nevis',
    'LC' : 'Saint Lucia',
    'MF' : 'Saint Martin',
    'PM' : 'Saint Pierre And Miquelon',
    'VC' : 'Saint Vincent And Grenadines',
    'WS' : 'Samoa',
    'SM' : 'San Marino',
    'ST' : 'Sao Tome And Principe',
    'SA' : 'Saudi Arabia',
    'SN' : 'Senegal',
    'RS' : 'Serbia',
    'SC' : 'Seychelles',
    'SL' : 'Sierra Leone',
    'SG' : 'Singapore',
    'SK' : 'Slovakia',
    'SI' : 'Slovenia',
    'SB' : 'Solomon Islands',
    'SO' : 'Somalia',
    'ZA' : 'South Africa',
    'GS' : 'South Georgia And Sandwich Isl.',
    'ES' : 'Spain',
    'LK' : 'Sri Lanka',
    'SD' : 'Sudan',
    'SR' : 'Suriname',
    'SJ' : 'Svalbard And Jan Mayen',
    'SZ' : 'Swaziland',
    'SE' : 'Sweden',
    'CH' : 'Switzerland',
    'SY' : 'Syrian Arab Republic',
    'TW' : 'Taiwan',
    'TJ' : 'Tajikistan',
    'TZ' : 'Tanzania',
    'TH' : 'Thailand',
    'TL' : 'Timor-Leste',
    'TG' : 'Togo',
    'TK' : 'Tokelau',
    'TO' : 'Tonga',
    'TT' : 'Trinidad And Tobago',
    'TN' : 'Tunisia',
    'TR' : 'Turkey',
    'TM' : 'Turkmenistan',
    'TC' : 'Turks And Caicos Islands',
    'TV' : 'Tuvalu',
    'UG' : 'Uganda',
    'UA' : 'Ukraine',
    'AE' : 'United Arab Emirates',
    'GB' : 'United Kingdom',
    'US' : 'United States',
    'UM' : 'United States Outlying Islands',
    'UY' : 'Uruguay',
    'UZ' : 'Uzbekistan',
    'VU' : 'Vanuatu',
    'VE' : 'Venezuela',
    'VN' : 'Viet Nam',
    'VG' : 'Virgin Islands, British',
    'VI' : 'Virgin Islands, U.S.',
    'WF' : 'Wallis And Futuna',
    'EH' : 'Western Sahara',
    'YE' : 'Yemen',
    'ZM' : 'Zambia',
    'ZW' : 'Zimbabwe'
};

export default function getCountryName (countryCode) {
    if (isoCountries.hasOwnProperty(countryCode)) {
        return isoCountries[countryCode];
    } else {
        return countryCode;
    }
}



AU Австралия
AT Австрия
 AZ Азербайджан
 AX Аландские острова
 AL Албания
   DZ Алжир
   VI Виргинские Острова (США)
   AS Американское Самоа
   AO Ангола
 AD Андорра
   AQ Антарктида
   AG Антигуа и Барбуда
 AR Аргентина
 AM Армения
 AW Аруба
  AF Афганистан
  BS Багамы
    BD Бангладеш
   BB Барбадос
 BH Бахрейн
    BZ Белиз
  BY Белоруссия
 BE Бельгия
 BJ Бенин
 BM Бермуды
   BG Болгария
 BO Боливия
    BQ Бонэйр, Синт-Эстатиус и Саба
 BA Босния и Герцеговина
   BW Ботсвана
 BR Бразилия
 IO Британская территория в Индийском океане
  VG Виргинские Острова (Великобритания)
   BN Бруней
   BF Буркина-Фасо
 BI Бурунди
    BT Бутан
 VU Вануату
    VA Ватикан
   GB Великобритания
 HU Венгрия
 VE Венесуэла
   UM Внешние малые острова (США)
  TL Восточный Тимор
 VN Вьетнам
 GA Габон
 HT Гаити
   GY Гайана
   GM Гамбия
  GH Гана
    GP Гваделупа
 GT Гватемала
    GF Гвиана
   GN Гвинея
  GW Гвинея-Бисау
    DE Германия
 GG Гернси
 GI Гибралтар
   HN Гондурас
   HK Гонконг
 GD Гренада
    GL Гренландия
   GR Греция
  GE Грузия
  GU Гуам
   DK Дания
   JE Джерси
    DJ Джибути
   DM Доминика
 DO Доминиканская Республика
   CD Демократическая Республика Конго
    EU Европейский союз
    EG Египет
   ZM Замбия
   EH САДР
   ZW Зимбабве
  IL Израиль
 IN Индия
 ID Индонезия
 JO Иордания
   IQ Ирак
   IR Иран
  IE Ирландия
    IS Исландия
   ES Испания
    IT Италия
 YE Йемен
   CV Кабо-Верде
    KZ Казахстан
   KY Острова Кайман
   KH Камбоджа
    CM Камерун
   CA Канада
 QA Катар
 KE Кения
 CY Кипр
 KG Киргизия
   KI Кирибати
  TW Китайская Республика
 KP КНДР
  CN КНР
   CC Кокосовые острова
   CO Колумбия
  KM Коморы
   CR Коста-Рика
   CI Кот-д’Ивуар
   CU Куба
   KW Кувейт
 CW Кюрасао
   LA Лаос
   LV Латвия
  LS Лесото
 LR Либерия
   LB Ливан
 LY Ливия
 LT Литва
   LI Лихтенштейн
   LU Люксембург
  MU Маврикий
   MR Мавритания
   MG Мадагаскар
 YT Майотта
 MO Макао
 MK Македония
   MW Малави
   MY Малайзия
   ML Мали
   MV Мальдивы
   MT Мальта
 MA Марокко
Мартиника    MQ
Маршалловы Острова MH
Мексика  MX
Микронезия   FM
Мозамбик MZ
Молдавия    MD
Монако   MC
Монголия   MN
Монтсеррат   MS
Мьянма  MM
Намибия NA
Науру NR
Непал   NP
Нигер NE
Нигерия NG
Нидерланды  NL
Никарагуа NI
Ниуэ   NU
Новая Зеландия  NZ
Новая Каледония   NC
Норвегия NO
ОАЭ    AE
Оман   OM
Остров Буве  BV
Остров Мэн IM
Острова Кука   CK
Остров Норфолк   NF
Остров Рождества   CX
Острова Питкэрн    PN
Острова Святой Елены, Вознесения и Тристан-да-Кунья    SH
Пакистан   PK
Палау PW
Государство Палестина PS
Панама   PA
Папуа — Новая Гвинея   PG
Парагвай   PY
Перу   PE
Польша   PL
Португалия PT
Пуэрто-Рико PR
Республика Конго  CG
Республика Корея    KR
Реюньон RE
Россия   RU
Руанда   RW
Румыния RO
Сальвадор   SV
Самоа WS
Сан-Марино   SM
Сан-Томе и Принсипи   ST
Саудовская Аравия  SA
Свазиленд SZ
Северные Марианские Острова    MP
Сейшельские Острова  SC
Сен-Бартелеми  BL
Сен-Мартен MF
Сен-Пьер и Микелон    PM
Сенегал SN
Сент-Винсент и Гренадины   VC
Сент-Китс и Невис KN
Сент-Люсия  LC
Сербия   RS
Сингапур  SG
Синт-Мартен    SX
Сирия SY
Словакия   SK
Словения   SI
Соломоновы Острова  SB
Сомали  SO
Судан SD
СССР   SU
Суринам    SR
США   US
Сьерра-Леоне   SL
Таджикистан  TJ
Таиланд    TH
Танзания   TZ
Тёркс и Кайкос TC
Того   TG
Токелау TK
Тонга TO
Тринидад и Тобаго   TT
Тувалу   TV
Тунис   TN
Туркмения  TM
Турция   TR
Уганда   UG
Узбекистан   UZ
Украина UA
Уоллис и Футуна  WF
Уругвай UY
Фареры    FO
Фиджи  FJ
Филиппины   PH
Финляндия   FI
Фолклендские острова   FK
Франция  FR
Французская Полинезия  PF
Французские Южные и Антарктические Территории   TF
Херд и Макдональд HM
Хорватия    HR
ЦАР    CF
Чад    TD
Черногория   ME
Чехия    CZ
Чили  CL
Швейцария   CH
Швеция   SE
Шпицберген и Ян-Майен  SJ
Шри-Ланка LK
Эквадор EC
Экваториальная Гвинея GQ
Эритрея ER
Эстония EE
Эфиопия    ET
ЮАР    ZA
Южная Георгия и Южные Сандвичевы Острова   GS
Южный Судан SS
Ямайка  JM
Япония    JP