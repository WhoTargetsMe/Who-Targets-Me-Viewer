export const getAdvertsByAdvertiserId = (advertiserId) => {
  const adverts = parseRawAdverts(rawAdverts)
  console.log(adverts)
  return adverts.filter((advert) => {
    return advert.advertiserId === advertiserId
  });
}

const parseRawAdverts = (adverts) => {
  return adverts.map((advert) => {
    return {
      ...advert,
      interests: JSON.parse(advert.interests)
    }
  })
}

const rawAdverts = [
  {
    "postId" : "1720700877943220",
    "interests" : null,
    "advertiserId" : "1008410152505633"
  },
  {
    "postId" : "128766104422944",
    "interests" : null,
    "advertiserId" : "102633810369507"
  },
  {
    "postId" : "1634161246659354",
    "interests" : "[\"Politics and social issues\",\"Politik und soziale Themen\"]",
    "advertiserId" : "106739889401505"
  },
  {
    "postId" : "118375345515215",
    "interests" : null,
    "advertiserId" : "107797583239658"
  },
  {
    "postId" : "118710592148357",
    "interests" : null,
    "advertiserId" : "107797583239658"
  },
  {
    "postId" : "119992402020176",
    "interests" : null,
    "advertiserId" : "107797583239658"
  },
  {
    "postId" : "121353535217396",
    "interests" : null,
    "advertiserId" : "107797583239658"
  },
  {
    "postId" : "1900133936668506",
    "interests" : null,
    "advertiserId" : "110337725648145"
  },
  {
    "postId" : "1900134313335135",
    "interests" : "[\"Handicraft\",\"Handwerk\",\"Leder\"]",
    "advertiserId" : "110337725648145"
  },
  {
    "postId" : "1900134760001757",
    "interests" : "[\"Handicraft\",\"Leder\"]",
    "advertiserId" : "110337725648145"
  },
  {
    "postId" : "1900310099984223",
    "interests" : "[\"Pflanzen\"]",
    "advertiserId" : "110337725648145"
  },
  {
    "postId" : "1907675089247724",
    "interests" : "[\"Pflanzen\",\"Plant\"]",
    "advertiserId" : "110337725648145"
  },
  {
    "postId" : "1909231452425421",
    "interests" : "[\"Haus und Garten\",\"Kreativität\"]",
    "advertiserId" : "110337725648145"
  },
  {
    "postId" : "1909231892425377",
    "interests" : "[\"Haus und Garten\"]",
    "advertiserId" : "110337725648145"
  },
  {
    "postId" : "118416365495831",
    "interests" : null,
    "advertiserId" : "116253752378759"
  },
  {
    "postId" : "118446772159457",
    "interests" : null,
    "advertiserId" : "116253752378759"
  },
  {
    "postId" : "118449568825844",
    "interests" : null,
    "advertiserId" : "116253752378759"
  },
  {
    "postId" : "118527758818025",
    "interests" : null,
    "advertiserId" : "116253752378759"
  },
  {
    "postId" : "118549112149223",
    "interests" : null,
    "advertiserId" : "116253752378759"
  },
  {
    "postId" : "118714458799355",
    "interests" : null,
    "advertiserId" : "116253752378759"
  },
  {
    "postId" : "119715745365893",
    "interests" : null,
    "advertiserId" : "116253752378759"
  },
  {
    "postId" : "119728368697964",
    "interests" : null,
    "advertiserId" : "116253752378759"
  },
  {
    "postId" : "119734595364008",
    "interests" : null,
    "advertiserId" : "116253752378759"
  },
  {
    "postId" : "119758175361650",
    "interests" : null,
    "advertiserId" : "116253752378759"
  },
  {
    "postId" : "119779172026217",
    "interests" : null,
    "advertiserId" : "116253752378759"
  },
  {
    "postId" : "120056501998484",
    "interests" : null,
    "advertiserId" : "116253752378759"
  },
  {
    "postId" : "120063451997789",
    "interests" : null,
    "advertiserId" : "116253752378759"
  },
  {
    "postId" : "120075111996623",
    "interests" : null,
    "advertiserId" : "116253752378759"
  },
  {
    "postId" : "120082438662557",
    "interests" : null,
    "advertiserId" : "116253752378759"
  },
  {
    "postId" : "120746748596126",
    "interests" : null,
    "advertiserId" : "116253752378759"
  },
  {
    "postId" : "120754171928717",
    "interests" : null,
    "advertiserId" : "116253752378759"
  },
  {
    "postId" : "121146601889474",
    "interests" : null,
    "advertiserId" : "116253752378759"
  },
  {
    "postId" : "1460397880710793",
    "interests" : null,
    "advertiserId" : "117393008344627"
  },
  {
    "postId" : "1460405664043348",
    "interests" : null,
    "advertiserId" : "117393008344627"
  },
  {
    "postId" : "1472780022805912",
    "interests" : null,
    "advertiserId" : "117393008344627"
  },
  {
    "postId" : "1602953279786465",
    "interests" : null,
    "advertiserId" : "130598067022001"
  },
  {
    "postId" : "1472298476222733",
    "interests" : null,
    "advertiserId" : "1321832661269316"
  },
  {
    "postId" : "1503795063073074",
    "interests" : "[\"Social Democratic Party of Austria\"]",
    "advertiserId" : "1321832661269316"
  },
  {
    "postId" : "1504422826343631",
    "interests" : "[\"Familie\",\"Fernseher\"]",
    "advertiserId" : "1321832661269316"
  },
  {
    "postId" : "1506609746124939",
    "interests" : null,
    "advertiserId" : "1321832661269316"
  },
  {
    "postId" : "1507602209359026",
    "interests" : null,
    "advertiserId" : "1321832661269316"
  },
  {
    "postId" : "1507971819322065",
    "interests" : null,
    "advertiserId" : "1321832661269316"
  },
  {
    "postId" : "1509910032461577",
    "interests" : null,
    "advertiserId" : "1321832661269316"
  },
  {
    "postId" : "1510084325777481",
    "interests" : null,
    "advertiserId" : "1321832661269316"
  },
  {
    "postId" : "10156096502957971",
    "interests" : null,
    "advertiserId" : "133416952970"
  },
  {
    "postId" : "10156106540577971",
    "interests" : null,
    "advertiserId" : "133416952970"
  },
  {
    "postId" : "10156106549517971",
    "interests" : null,
    "advertiserId" : "133416952970"
  },
  {
    "postId" : "10156117808237971",
    "interests" : null,
    "advertiserId" : "133416952970"
  },
  {
    "postId" : "10156122135337971",
    "interests" : null,
    "advertiserId" : "133416952970"
  },
  {
    "postId" : "10156127590717971",
    "interests" : null,
    "advertiserId" : "133416952970"
  },
  {
    "postId" : "10156127952227971",
    "interests" : null,
    "advertiserId" : "133416952970"
  },
  {
    "postId" : "10156146589222971",
    "interests" : null,
    "advertiserId" : "133416952970"
  },
  {
    "postId" : "10156146907827971",
    "interests" : null,
    "advertiserId" : "133416952970"
  },
  {
    "postId" : "10156150095302971",
    "interests" : null,
    "advertiserId" : "133416952970"
  },
  {
    "postId" : "10156153386457971",
    "interests" : null,
    "advertiserId" : "133416952970"
  },
  {
    "postId" : "10156165389167971",
    "interests" : null,
    "advertiserId" : "133416952970"
  },
  {
    "postId" : "10156168553867971",
    "interests" : null,
    "advertiserId" : "133416952970"
  },
  {
    "postId" : "10156173243252971",
    "interests" : null,
    "advertiserId" : "133416952970"
  },
  {
    "postId" : "10156175081747971",
    "interests" : null,
    "advertiserId" : "133416952970"
  },
  {
    "postId" : "843296209167199",
    "interests" : null,
    "advertiserId" : "133416952970"
  },
  {
    "postId" : "1511063302318568",
    "interests" : "[\"Sozialdemokratische Partei Österreichs\"]",
    "advertiserId" : "138952762862969"
  },
  {
    "postId" : "1521023427989222",
    "interests" : null,
    "advertiserId" : "138952762862969"
  },
  {
    "postId" : "1924630731192691",
    "interests" : null,
    "advertiserId" : "1392449987744104"
  },
  {
    "postId" : "1892531704332662",
    "interests" : null,
    "advertiserId" : "1397243117194859"
  },
  {
    "postId" : "10154910471200869",
    "interests" : null,
    "advertiserId" : "142219720868"
  },
  {
    "postId" : "10154952165015869",
    "interests" : null,
    "advertiserId" : "142219720868"
  },
  {
    "postId" : "10155482913165081",
    "interests" : null,
    "advertiserId" : "143456819025728"
  },
  {
    "postId" : "1561173213920741",
    "interests" : "[\"Politik und soziale Themen\"]",
    "advertiserId" : "143456819025728"
  },
  {
    "postId" : "1563639883674074",
    "interests" : null,
    "advertiserId" : "143456819025728"
  },
  {
    "postId" : "1565753650129364",
    "interests" : null,
    "advertiserId" : "143456819025728"
  },
  {
    "postId" : "1566437176727678",
    "interests" : null,
    "advertiserId" : "143456819025728"
  },
  {
    "postId" : "1567329853305077",
    "interests" : null,
    "advertiserId" : "143456819025728"
  },
  {
    "postId" : "1569284809776248",
    "interests" : null,
    "advertiserId" : "143456819025728"
  },
  {
    "postId" : "1574305879274141",
    "interests" : null,
    "advertiserId" : "143456819025728"
  },
  {
    "postId" : "1575215852516477",
    "interests" : "[\"Verkehr\"]",
    "advertiserId" : "143456819025728"
  },
  {
    "postId" : "1576045372433525",
    "interests" : "[\"Politik und soziale Themen\"]",
    "advertiserId" : "143456819025728"
  },
  {
    "postId" : "1576458105725585",
    "interests" : null,
    "advertiserId" : "143456819025728"
  },
  {
    "postId" : "1577835398921189",
    "interests" : null,
    "advertiserId" : "143456819025728"
  },
  {
    "postId" : "1932975280360639",
    "interests" : null,
    "advertiserId" : "1471795009812004"
  },
  {
    "postId" : "1448650145202820",
    "interests" : "[\"Homöopathie\"]",
    "advertiserId" : "147426198658561"
  },
  {
    "postId" : "2081491715417302",
    "interests" : null,
    "advertiserId" : "1476311435935336"
  },
  {
    "postId" : "2085318068368000",
    "interests" : null,
    "advertiserId" : "1476311435935336"
  },
  {
    "postId" : "2088690211364119",
    "interests" : null,
    "advertiserId" : "1476311435935336"
  },
  {
    "postId" : "715281615336624",
    "interests" : null,
    "advertiserId" : "147879688743489"
  },
  {
    "postId" : "715285565336229",
    "interests" : null,
    "advertiserId" : "147879688743489"
  },
  {
    "postId" : "1927758700812171",
    "interests" : null,
    "advertiserId" : "1493200800934632"
  },
  {
    "postId" : "10155737502304419",
    "interests" : null,
    "advertiserId" : "15078244418"
  },
  {
    "postId" : "10155767402454419",
    "interests" : null,
    "advertiserId" : "15078244418"
  },
  {
    "postId" : "10155767402694419",
    "interests" : null,
    "advertiserId" : "15078244418"
  },
  {
    "postId" : "10212691861024139",
    "interests" : "[\"Liberalismus\",\"Matthias Strolz\",\"Neos\"]",
    "advertiserId" : "15078244418"
  },
  {
    "postId" : "10212691888624829",
    "interests" : "[\"Neos\"]",
    "advertiserId" : "15078244418"
  },
  {
    "postId" : "10154704436571277",
    "interests" : null,
    "advertiserId" : "151181431276"
  },
  {
    "postId" : "10154707754356277",
    "interests" : null,
    "advertiserId" : "151181431276"
  },
  {
    "postId" : "10154720395756277",
    "interests" : null,
    "advertiserId" : "151181431276"
  },
  {
    "postId" : "10154727792151277",
    "interests" : null,
    "advertiserId" : "151181431276"
  },
  {
    "postId" : "10154730088101277",
    "interests" : null,
    "advertiserId" : "151181431276"
  },
  {
    "postId" : "10154730110321277",
    "interests" : null,
    "advertiserId" : "151181431276"
  },
  {
    "postId" : "10154736071466277",
    "interests" : null,
    "advertiserId" : "151181431276"
  },
  {
    "postId" : "1962434233970476",
    "interests" : null,
    "advertiserId" : "1558183444395559"
  },
  {
    "postId" : "1962894573924442",
    "interests" : null,
    "advertiserId" : "1558183444395559"
  },
  {
    "postId" : "1964639800416586",
    "interests" : null,
    "advertiserId" : "1558183444395559"
  },
  {
    "postId" : "1965459793667920",
    "interests" : null,
    "advertiserId" : "1558183444395559"
  },
  {
    "postId" : "1967543923459507",
    "interests" : null,
    "advertiserId" : "1558183444395559"
  },
  {
    "postId" : "1967965440084022",
    "interests" : null,
    "advertiserId" : "1558183444395559"
  },
  {
    "postId" : "692504167612841",
    "interests" : null,
    "advertiserId" : "158827740980489"
  },
  {
    "postId" : "679809375549050",
    "interests" : "[\"Austrian People's Party\"]",
    "advertiserId" : "162205823976077"
  },
  {
    "postId" : "682350005294987",
    "interests" : "[\"Austrian People's Party\",\"Salzburg\"]",
    "advertiserId" : "162205823976077"
  },
  {
    "postId" : "682648528598468",
    "interests" : "[\"Salzburg\"]",
    "advertiserId" : "162205823976077"
  },
  {
    "postId" : "682919685238019",
    "interests" : "[\"Salzburg\"]",
    "advertiserId" : "162205823976077"
  },
  {
    "postId" : "684132375116750",
    "interests" : null,
    "advertiserId" : "162205823976077"
  },
  {
    "postId" : "687956348067686",
    "interests" : "[\"Salzburg\"]",
    "advertiserId" : "162205823976077"
  },
  {
    "postId" : "1949974621937248",
    "interests" : "[\"Sozialdemokratische Partei Österreichs\"]",
    "advertiserId" : "1693730624228317"
  },
  {
    "postId" : "1957214727879904",
    "interests" : null,
    "advertiserId" : "1693730624228317"
  },
  {
    "postId" : "1944433152437395",
    "interests" : "[\"Ausbildung\"]",
    "advertiserId" : "1697716257109087"
  },
  {
    "postId" : "749926311882554",
    "interests" : null,
    "advertiserId" : "170335519841639"
  },
  {
    "postId" : "1286412868082435",
    "interests" : null,
    "advertiserId" : "170945426295857"
  },
  {
    "postId" : "1668576313206641",
    "interests" : null,
    "advertiserId" : "172040642860223"
  },
  {
    "postId" : "1683418515055754",
    "interests" : "[\"Politics and social issues\",\"Politik und soziale Themen\"]",
    "advertiserId" : "172040642860223"
  },
  {
    "postId" : "1684299188301020",
    "interests" : null,
    "advertiserId" : "172040642860223"
  },
  {
    "postId" : "1688130337917905",
    "interests" : null,
    "advertiserId" : "172040642860223"
  },
  {
    "postId" : "1688179534579652",
    "interests" : "[\"Ausbildung\"]",
    "advertiserId" : "172040642860223"
  },
  {
    "postId" : "1691170544280551",
    "interests" : "[\"Ausbildung\"]",
    "advertiserId" : "172040642860223"
  },
  {
    "postId" : "1694105517320387",
    "interests" : "[\"Ausbildung\",\"Politik und soziale Themen\"]",
    "advertiserId" : "172040642860223"
  },
  {
    "postId" : "1697942903603315",
    "interests" : null,
    "advertiserId" : "172040642860223"
  },
  {
    "postId" : "615908798798381",
    "interests" : null,
    "advertiserId" : "172040642860223"
  },
  {
    "postId" : "506112166419258",
    "interests" : null,
    "advertiserId" : "182783852085426"
  },
  {
    "postId" : "1888878881361797",
    "interests" : null,
    "advertiserId" : "1867843866798632"
  },
  {
    "postId" : "1900193970230288",
    "interests" : "[\"Sport\"]",
    "advertiserId" : "1867843866798632"
  },
  {
    "postId" : "1900325403550478",
    "interests" : null,
    "advertiserId" : "1867843866798632"
  },
  {
    "postId" : "1905599496356402",
    "interests" : "[\"Sport\"]",
    "advertiserId" : "1867843866798632"
  },
  {
    "postId" : "10155784772977070",
    "interests" : null,
    "advertiserId" : "189493277069"
  },
  {
    "postId" : "10154715412421568",
    "interests" : null,
    "advertiserId" : "196697971567"
  },
  {
    "postId" : "1620471804650070",
    "interests" : "[\"Sebastian Kurz\"]",
    "advertiserId" : "197677003596231"
  },
  {
    "postId" : "1691901567488869",
    "interests" : "[\"Politics and social issues\",\"Politik und soziale Themen\"]",
    "advertiserId" : "208930355786005"
  },
  {
    "postId" : "1692667257412300",
    "interests" : "[\"Sozialdemokratische Partei Österreichs\"]",
    "advertiserId" : "208930355786005"
  },
  {
    "postId" : "1698441013501591",
    "interests" : "[\"Politics and social issues\",\"Politik und soziale Themen\"]",
    "advertiserId" : "208930355786005"
  },
  {
    "postId" : "1698447616834264",
    "interests" : "[\"Politik und soziale Themen\"]",
    "advertiserId" : "208930355786005"
  },
  {
    "postId" : "1698451230167236",
    "interests" : "[\"Politik und soziale Themen\"]",
    "advertiserId" : "208930355786005"
  },
  {
    "postId" : "1704387062906986",
    "interests" : "[\"Sozialdemokratische Partei Österreichs\"]",
    "advertiserId" : "208930355786005"
  },
  {
    "postId" : "1705350446143981",
    "interests" : null,
    "advertiserId" : "208930355786005"
  },
  {
    "postId" : "1705419242803768",
    "interests" : null,
    "advertiserId" : "208930355786005"
  },
  {
    "postId" : "1706139922731700",
    "interests" : "[\"Sozialdemokratische Partei Österreichs\"]",
    "advertiserId" : "208930355786005"
  },
  {
    "postId" : "1708237595855266",
    "interests" : "[\"Die Grünen – Die Grüne Alternative\",\"Social Democratic Party of Austria\",\"Socialism\",\"Sozialdemokratie\",\"Sozialdemokratische Partei Österreichs\",\"Sozialismus\",\"The Greens – The Green Alternative\"]",
    "advertiserId" : "208930355786005"
  },
  {
    "postId" : "1435595369888456",
    "interests" : null,
    "advertiserId" : "221960067918665"
  },
  {
    "postId" : "1444470225667637",
    "interests" : null,
    "advertiserId" : "221960067918665"
  },
  {
    "postId" : "1445619452219381",
    "interests" : null,
    "advertiserId" : "221960067918665"
  },
  {
    "postId" : "1815670608463072",
    "interests" : null,
    "advertiserId" : "237290919634390"
  },
  {
    "postId" : "1443369869116103",
    "interests" : null,
    "advertiserId" : "243812335738535"
  },
  {
    "postId" : "10211773278459804",
    "interests" : null,
    "advertiserId" : "255318067965019"
  },
  {
    "postId" : "10211773433183672",
    "interests" : null,
    "advertiserId" : "255318067965019"
  },
  {
    "postId" : "1161138390652342",
    "interests" : null,
    "advertiserId" : "255318067965019"
  },
  {
    "postId" : "1164865166946331",
    "interests" : null,
    "advertiserId" : "255318067965019"
  },
  {
    "postId" : "1173537106079137",
    "interests" : "[\"Die Grünen – Die Grüne Alternative\",\"Feminismus\",\"The Greens – The Green Alternative\",\"Universität\",\"University\",\"Vice (Magazin)\",\"Vice (magazine)\"]",
    "advertiserId" : "255318067965019"
  },
  {
    "postId" : "1176785625754285",
    "interests" : "[\"Die Linke\",\"Greenpeace\",\"Sozialismus\",\"Universität\",\"University\"]",
    "advertiserId" : "255318067965019"
  },
  {
    "postId" : "1179672678798913",
    "interests" : null,
    "advertiserId" : "255318067965019"
  },
  {
    "postId" : "1521693281232820",
    "interests" : null,
    "advertiserId" : "255318067965019"
  },
  {
    "postId" : "1529897200412428",
    "interests" : null,
    "advertiserId" : "255318067965019"
  },
  {
    "postId" : "760293027467518",
    "interests" : null,
    "advertiserId" : "255318067965019"
  },
  {
    "postId" : "829453933884760",
    "interests" : null,
    "advertiserId" : "255318067965019"
  },
  {
    "postId" : "832603386903148",
    "interests" : null,
    "advertiserId" : "255318067965019"
  },
  {
    "postId" : "833167323513421",
    "interests" : null,
    "advertiserId" : "255318067965019"
  },
  {
    "postId" : "833440763486077",
    "interests" : null,
    "advertiserId" : "255318067965019"
  },
  {
    "postId" : "837122419784578",
    "interests" : null,
    "advertiserId" : "255318067965019"
  },
  {
    "postId" : "838703309626489",
    "interests" : null,
    "advertiserId" : "255318067965019"
  },
  {
    "postId" : "839075142922639",
    "interests" : "[\"Nichtregierungsorganisation\",\"Universität\",\"University\"]",
    "advertiserId" : "255318067965019"
  },
  {
    "postId" : "839409406222546",
    "interests" : "[\"Die Grünen – Die Grüne Alternative\",\"Die Linke\"]",
    "advertiserId" : "255318067965019"
  },
  {
    "postId" : "839492546214232",
    "interests" : null,
    "advertiserId" : "255318067965019"
  },
  {
    "postId" : "839524622877691",
    "interests" : "[\"Universität\"]",
    "advertiserId" : "255318067965019"
  },
  {
    "postId" : "839568019540018",
    "interests" : "[\"Die Linke\",\"Feminismus\",\"Greenpeace\",\"Universität\",\"University\"]",
    "advertiserId" : "255318067965019"
  },
  {
    "postId" : "843286109168209",
    "interests" : null,
    "advertiserId" : "255318067965019"
  },
  {
    "postId" : "843299905833496",
    "interests" : "[\"Gerechtigkeit\",\"University\"]",
    "advertiserId" : "255318067965019"
  },
  {
    "postId" : "843693675794119",
    "interests" : "[\"Greenpeace\",\"Kommunismus\",\"Menschenrechte\",\"Non-governmental organization\",\"Universität\",\"University\",\"Women's rights\"]",
    "advertiserId" : "255318067965019"
  },
  {
    "postId" : "843785172451636",
    "interests" : "[\"Coupons\",\"Gutscheine\"]",
    "advertiserId" : "255318067965019"
  },
  {
    "postId" : "852853058208166",
    "interests" : "[\"Freiheitliche Partei Österreichs\"]",
    "advertiserId" : "264603237033154"
  },
  {
    "postId" : "1548935628499925",
    "interests" : null,
    "advertiserId" : "269399976453503"
  },
  {
    "postId" : "346583459113844",
    "interests" : null,
    "advertiserId" : "288016751637182"
  },
  {
    "postId" : "350668748705315",
    "interests" : null,
    "advertiserId" : "288016751637182"
  },
  {
    "postId" : "351087645330092",
    "interests" : null,
    "advertiserId" : "288016751637182"
  },
  {
    "postId" : "351087881996735",
    "interests" : null,
    "advertiserId" : "288016751637182"
  },
  {
    "postId" : "351575335281323",
    "interests" : null,
    "advertiserId" : "288016751637182"
  },
  {
    "postId" : "351907011914822",
    "interests" : null,
    "advertiserId" : "288016751637182"
  },
  {
    "postId" : "352032135235643",
    "interests" : null,
    "advertiserId" : "288016751637182"
  },
  {
    "postId" : "352470748525115",
    "interests" : null,
    "advertiserId" : "288016751637182"
  },
  {
    "postId" : "352516175187239",
    "interests" : null,
    "advertiserId" : "288016751637182"
  },
  {
    "postId" : "352516365187220",
    "interests" : null,
    "advertiserId" : "288016751637182"
  },
  {
    "postId" : "352516511853872",
    "interests" : null,
    "advertiserId" : "288016751637182"
  },
  {
    "postId" : "352995621805961",
    "interests" : null,
    "advertiserId" : "288016751637182"
  },
  {
    "postId" : "353306495108207",
    "interests" : null,
    "advertiserId" : "288016751637182"
  },
  {
    "postId" : "353331231772400",
    "interests" : null,
    "advertiserId" : "288016751637182"
  },
  {
    "postId" : "353331348439055",
    "interests" : null,
    "advertiserId" : "288016751637182"
  },
  {
    "postId" : "354367298335460",
    "interests" : null,
    "advertiserId" : "288016751637182"
  },
  {
    "postId" : "354733191632204",
    "interests" : null,
    "advertiserId" : "288016751637182"
  },
  {
    "postId" : "354735828298607",
    "interests" : null,
    "advertiserId" : "288016751637182"
  },
  {
    "postId" : "355022978269892",
    "interests" : null,
    "advertiserId" : "288016751637182"
  },
  {
    "postId" : "355176868254503",
    "interests" : null,
    "advertiserId" : "288016751637182"
  },
  {
    "postId" : "355184024920454",
    "interests" : null,
    "advertiserId" : "288016751637182"
  },
  {
    "postId" : "355651571540366",
    "interests" : null,
    "advertiserId" : "288016751637182"
  },
  {
    "postId" : "355911401514383",
    "interests" : null,
    "advertiserId" : "288016751637182"
  },
  {
    "postId" : "357502774688579",
    "interests" : null,
    "advertiserId" : "288016751637182"
  },
  {
    "postId" : "357506744688182",
    "interests" : null,
    "advertiserId" : "288016751637182"
  },
  {
    "postId" : "357537381351785",
    "interests" : null,
    "advertiserId" : "288016751637182"
  },
  {
    "postId" : "357539941351529",
    "interests" : null,
    "advertiserId" : "288016751637182"
  },
  {
    "postId" : "357545784684278",
    "interests" : null,
    "advertiserId" : "288016751637182"
  },
  {
    "postId" : "357545968017593",
    "interests" : null,
    "advertiserId" : "288016751637182"
  },
  {
    "postId" : "357656211339902",
    "interests" : null,
    "advertiserId" : "288016751637182"
  },
  {
    "postId" : "357660064672850",
    "interests" : null,
    "advertiserId" : "288016751637182"
  },
  {
    "postId" : "357945271310996",
    "interests" : null,
    "advertiserId" : "288016751637182"
  },
  {
    "postId" : "358080167964173",
    "interests" : null,
    "advertiserId" : "288016751637182"
  },
  {
    "postId" : "1514101518628733",
    "interests" : null,
    "advertiserId" : "289163077789256"
  },
  {
    "postId" : "2001058653241432",
    "interests" : "[\"Politik und soziale Themen\"]",
    "advertiserId" : "291805967500051"
  },
  {
    "postId" : "2004833219530642",
    "interests" : "[\"Politik und soziale Themen\"]",
    "advertiserId" : "291805967500051"
  },
  {
    "postId" : "10154714214132536",
    "interests" : null,
    "advertiserId" : "292276357535"
  },
  {
    "postId" : "10154777311512536",
    "interests" : null,
    "advertiserId" : "292276357535"
  },
  {
    "postId" : "801919506645721",
    "interests" : null,
    "advertiserId" : "303557479815262"
  },
  {
    "postId" : "1578920072202695",
    "interests" : null,
    "advertiserId" : "328114213949960"
  },
  {
    "postId" : "10154976792363568",
    "interests" : null,
    "advertiserId" : "328124688567"
  },
  {
    "postId" : "1485671428188233",
    "interests" : "[\"Politik und soziale Themen\"]",
    "advertiserId" : "337372246351496"
  },
  {
    "postId" : "1492375717517804",
    "interests" : "[\"Politik und soziale Themen\"]",
    "advertiserId" : "337372246351496"
  },
  {
    "postId" : "10155697625937305",
    "interests" : null,
    "advertiserId" : "342973222304"
  },
  {
    "postId" : "1529400370475757",
    "interests" : null,
    "advertiserId" : "399515876797551"
  },
  {
    "postId" : "880177885481268",
    "interests" : null,
    "advertiserId" : "422002897965438"
  },
  {
    "postId" : "883639401801783",
    "interests" : null,
    "advertiserId" : "422002897965438"
  },
  {
    "postId" : "1115886965214073",
    "interests" : null,
    "advertiserId" : "423439201125523"
  },
  {
    "postId" : "1122583404544429",
    "interests" : null,
    "advertiserId" : "423439201125523"
  },
  {
    "postId" : "1126249177511185",
    "interests" : null,
    "advertiserId" : "423439201125523"
  },
  {
    "postId" : "1376481965783358",
    "interests" : null,
    "advertiserId" : "444281059003458"
  },
  {
    "postId" : "1535813909819342",
    "interests" : null,
    "advertiserId" : "472325142834896"
  },
  {
    "postId" : "1837659966263942",
    "interests" : null,
    "advertiserId" : "487431744620111"
  },
  {
    "postId" : "1724172554294605",
    "interests" : null,
    "advertiserId" : "503075049737701"
  },
  {
    "postId" : "1428996540518141",
    "interests" : null,
    "advertiserId" : "508064915944646"
  },
  {
    "postId" : "1434611073290021",
    "interests" : "[\"Journalismus\"]",
    "advertiserId" : "508064915944646"
  },
  {
    "postId" : "1436405136443948",
    "interests" : "[\"Journalismus\"]",
    "advertiserId" : "508064915944646"
  },
  {
    "postId" : "1467941626625095",
    "interests" : null,
    "advertiserId" : "513702105382390"
  },
  {
    "postId" : "1113126178824184",
    "interests" : null,
    "advertiserId" : "606677986135675"
  },
  {
    "postId" : "10214424508984365",
    "interests" : null,
    "advertiserId" : "639538052795950"
  },
  {
    "postId" : "1448196328596781",
    "interests" : null,
    "advertiserId" : "639538052795950"
  },
  {
    "postId" : "1595694647176269",
    "interests" : null,
    "advertiserId" : "651374724941604"
  },
  {
    "postId" : "10154933014761134",
    "interests" : null,
    "advertiserId" : "66292886133"
  },
  {
    "postId" : "10154978754201134",
    "interests" : null,
    "advertiserId" : "66292886133"
  },
  {
    "postId" : "10154999508831134",
    "interests" : null,
    "advertiserId" : "66292886133"
  },
  {
    "postId" : "10155026958776134",
    "interests" : null,
    "advertiserId" : "66292886133"
  },
  {
    "postId" : "10155346482975081",
    "interests" : null,
    "advertiserId" : "77393060080"
  },
  {
    "postId" : "10155429793070081",
    "interests" : null,
    "advertiserId" : "77393060080"
  },
  {
    "postId" : "10155449308360081",
    "interests" : null,
    "advertiserId" : "77393060080"
  },
  {
    "postId" : "10155450503320081",
    "interests" : null,
    "advertiserId" : "77393060080"
  },
  {
    "postId" : "10155463188695081",
    "interests" : null,
    "advertiserId" : "77393060080"
  },
  {
    "postId" : "10155483394375081",
    "interests" : null,
    "advertiserId" : "77393060080"
  },
  {
    "postId" : "10155483410525081",
    "interests" : null,
    "advertiserId" : "77393060080"
  },
  {
    "postId" : "1527183287367210",
    "interests" : null,
    "advertiserId" : "807728929312653"
  },
  {
    "postId" : "1309941935799092",
    "interests" : null,
    "advertiserId" : "808762272583730"
  },
  {
    "postId" : "1712619522145094",
    "interests" : null,
    "advertiserId" : "868982719842116"
  },
  {
    "postId" : "1596794240381388",
    "interests" : null,
    "advertiserId" : "875450075849145"
  },
  {
    "postId" : "10154967625161134",
    "interests" : null,
    "advertiserId" : "88108406133"
  },
  {
    "postId" : "10155017473936134",
    "interests" : "[\"Vienna\",\"Wien\"]",
    "advertiserId" : "88108406133"
  },
  {
    "postId" : "10155026744906134",
    "interests" : null,
    "advertiserId" : "88108406133"
  },
  {
    "postId" : "10155026745701134",
    "interests" : null,
    "advertiserId" : "88108406133"
  },
  {
    "postId" : "10155027360976134",
    "interests" : null,
    "advertiserId" : "88108406133"
  },
  {
    "postId" : "10155027366066134",
    "interests" : null,
    "advertiserId" : "88108406133"
  },
  {
    "postId" : "10155047698226134",
    "interests" : null,
    "advertiserId" : "88108406133"
  },
  {
    "postId" : "1846831032012003",
    "interests" : null,
    "advertiserId" : "912354165459699"
  },
  {
    "postId" : "1533689973343225",
    "interests" : null,
    "advertiserId" : "913685615343667"
  },
  {
    "postId" : "1894916507192919",
    "interests" : null,
    "advertiserId" : "920292787988634"
  },
  {
    "postId" : "1896396077044962",
    "interests" : null,
    "advertiserId" : "920292787988634"
  },
  {
    "postId" : "1900599219957981",
    "interests" : null,
    "advertiserId" : "920292787988634"
  },
  {
    "postId" : "10155591190380390",
    "interests" : null,
    "advertiserId" : "98742245389"
  },
  {
    "postId" : "10155617047850390",
    "interests" : null,
    "advertiserId" : "98742245389"
  },
  {
    "postId" : "10155636348685390",
    "interests" : "[\"Österreichische Volkspartei\"]",
    "advertiserId" : "98742245389"
  }
]

export default parseRawAdverts(rawAdverts)
