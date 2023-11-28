var cur = 0;
let data;
data = [];

var newseffects = ["6b","6c","4c","4b","0c","0b","1b","1c","3c","3b","8c","8b","5b","5c","7c","7b","2c","2b","!b","!g"];
var th = 0;

var prevstock = [];



var bstwac = 0;

var pwalth = 0;

var uachvrd = [];

var taui = 0;

var names = ["Oil", "Mining", "Electronics", "Wood", "Farming", "Casino", "Ship", "Book", "Military"]
var descs = ["Oil Company Co. Inc. pumps oil from Saudi-Arabia to Venezuela. It was founded in 1898 and is a very stable company.",
    "Mining Company Co. Inc. mines gold, copper, zinc, aluminium, silver and coal from all over the world. It's CEO is Jack Minington who takes big risks.",
    "Electronics Company Co. Inc. makes all kinds of of eletcronics but is specialized to circuits. It is a new fastly growing business.",
    "Wood Company Co. Inc. cuts wood from forests in Russia. It has made good deals in the past and is very profitable.", 
    "Farming Company Co. Inc. farms bananas, cocoa beans, watermelons and vegetables. It has good relations with Ship Company which transports it's food.", 
    "Casino Company Co. Inc. has 101 casinos in 23 countries. They have very good gambling games but the company is very new.", 
    "Ship Company Co. Inc. has ships that transport passengers and cargo. It is very stable and none of it's ships have shinken.", 
    "Book Company Co. Inc. publishes books in many languages. It was founded in 1714 by the inventor of the press machine.", 
    "Military Company Co. Inc. sells weapons, ammunition tanks and warships to Mexico, China and North-Korea. The company's new nuke program looks promising and higly profitable."];

var rbnews = [
    "Saudi-Arabia and Venezuela are staring to run out of oil -Oil company in chaos",
    "Mining company's businesses keep failing, investors sell stocks -Massive value lose",
    "New study finds out that electronic devices are radioactive -Global ban on Electronics company's products",
    "Russia bans Wood company for coworking with usa -Wood company near end",
    "Farming company near banckrupcy when all investors panic and sell thei stocks becouse of recent news about carrots being unhealthy",
    "UN forbids gambling -Casino company has to business illegally",
    "Ship company's massive tax fraud got revealed -Ship company now in massive depts and CEO to jail",
    "Book company's libraries in United States got nationalized -Book Company near banckrupcy",
    "Military Companys new rival takes all income -Military company has to sell with lose"];




var news = [
    "Ship Company Co's ship sank in the Atlantic \n-What a loss",
    "Many airplanes fell from sky -Big win for Ship Company",
    "New fertilizer invented in Australia \n-Farmers excited",
    "Exceptionally long dry season bad for farming indrusty",
    "Oil price goes to the clouds \n-Oil Company very happy",
    "Big oil burn in Oil Company's storage -Oil company sad",
    "Jack Minington died \n-Mining Company in total chaos",
    "New gold areas found in Klondike -Mining Company celebrates",
    "Major forest fires in sourthern hempispehre \n-Price of wood exlpoded, Wood Company celebrates",
    "Wood Company's headquarters lost internet -Everything stuck",
    "World War 3 started \n-Military Company very happy",
    "Military company's bomb storage exploded -CEO quits",
    "Gambling banned in China -Casino Company terrified",
    "Casino taxes removed from Europe -Casino company celebrates",
    "Big electrical breaks so people buy more books -Book company very happy",
    "Africa is digitalizing fast -Book company griefs",
    "Canada buys 100000000000 circuits for digital progress -Electronics company very happy",
    "Electronics company's factory ran out of chips -Very bad",
    "Global depression hits all indrusties \n-Very bad for economy",
    "Economy going very well -Everyone happy",
    ];

var achvpics = [
    "chart", "chart", "chart", "chart", "money", "money", "money", "money", "money", "money", "Oil", "Mining", "Electronics", "Wood", 
    "Farming", "Casino", "Ship", "Book", "Military", "clock", "clock", "clock", "clock"
    ]


var achvdesc = [
    "Make your first step to getting rich",
    "100 trades, experienced trader",
    "1000 trades, master traider",
    "Buy single stocks with all cash!",
    "Wealth more than 1000$",
    "Wealth more than 100 000$",
    "Millionaire -large amount of money",
    "Billionaire -Super rich",
    "Trillionare -Mega rich",
    "Quadrillionaire -Richest man in the world",
    "Get 10 000 oil stocks",
    "Get 10 000 mining stocks",
    "Get 10 000 eletronics stocks",
    "Get 10 000 wood stokcs",
    "Get 10 000 farming stocks",
    "Get 10 000 casino stokcs",
    "Get 10 000 ship stocks",
    "Get 10 000 book stokcs",
    "Get 10 000 military stocks",
    "Play game for 500 seconds",
    "Play game for 2 000 seconds",
    "Play game for 10 000",
    "Play game for 30 000 seconds"
    ];
        

// list of achievements
var achcievements = [
    "First trade",
    "100th trade",
    "1000th trade",
    "Risky business",
    "Wealthy",
    "Rich",
    "Millionaire",
    "Billionaire",
    "Trillionaire",
    "Quadrillionaire",
    "Oily business",
    "Going to the ground",
    "Bzzt",
    "Chop chop",
    "Plant master",
    "Jackpot",
    "To the seas",
    "Feeling reading",
    "Kaboom",
    "Starter",
    "Amateur",
    "Professional",
    "Expert"
    ];

var achvlimits = [
    [1, 100, 1000],
    [0], 
    [1000, 100000, 1000000, 1000000000, 1000000000000, 1000000000000000],
    [10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000],
    [500, 2000, 10000, 30000]];