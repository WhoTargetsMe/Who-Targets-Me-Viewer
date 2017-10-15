export const getAdvertiserById = (advertiserId) => {
  for (let advertiser of advertisers) {
    if(advertiser.advertiserId === advertiserId) {
      return advertiser;
    }
  }
  return null;
}

const advertisers = [
  {
    "advertiserName" : "FPÖ Favoriten",
    "advertiserId" : "472325142834896"
  },
  {
    "advertiserName" : "FPÖ Gänserndorf - Bezirk",
    "advertiserId" : "651374724941604"
  },
  {
    "advertiserName" : "FPÖ Gerasdorf bei Wien",
    "advertiserId" : "264603237033154"
  },
  {
    "advertiserName" : "FPÖ Golling",
    "advertiserId" : "1697716257109087"
  },
  {
    "advertiserName" : "FPÖ Kaltenleutgeben",
    "advertiserId" : "1493200800934632"
  },
  {
    "advertiserName" : "FPÖ Linz",
    "advertiserId" : "422002897965438"
  },
  {
    "advertiserName" : "FPÖ Maria Enzersdorf",
    "advertiserId" : "920292787988634"
  },
  {
    "advertiserName" : "FPÖ Mauthausen",
    "advertiserId" : "807728929312653"
  },
  {
    "advertiserName" : "FPÖ Murtal und Freiheitliche Jugend Murtal",
    "advertiserId" : "1476311435935336"
  },
  {
    "advertiserName" : "FPÖ Schlierbach",
    "advertiserId" : "196697971567"
  },
  {
    "advertiserName" : "FPÖ St. Pölten",
    "advertiserId" : "303557479815262"
  },
  {
    "advertiserName" : "FPÖ Tirol - die Tiroler Freiheitlichen",
    "advertiserId" : "197677003596231"
  },
  {
    "advertiserName" : "Harry Preuner und die Stadtpartei ÖVP",
    "advertiserId" : "162205823976077"
  },
  {
    "advertiserName" : "In Penzing zuhaus - SPÖ Penzing",
    "advertiserId" : "1008410152505633"
  },
  {
    "advertiserName" : "Junge Generation in der SPÖ",
    "advertiserId" : "138952762862969"
  },
  {
    "advertiserName" : "Junge Generation in der SPÖ Oberösterreich",
    "advertiserId" : "291805967500051"
  },
  {
    "advertiserName" : "Junge ÖVP Landstraße",
    "advertiserId" : "513702105382390"
  },
  {
    "advertiserName" : "Junge ÖVP Wien",
    "advertiserId" : "98742245389"
  },
  {
    "advertiserName" : "Martin Schmeding - Ihr grüner Bundestagskandidat im Wahlkreis Konstanz",
    "advertiserId" : "1867843866798632"
  },
  {
    "advertiserName" : "OÖVP Bezirk Grieskirchen",
    "advertiserId" : "147879688743489"
  },
  {
    "advertiserName" : "OÖVP - die Oberösterreichische Volkspartei",
    "advertiserId" : "289163077789256"
  },
  {
    "advertiserName" : "ÖVP",
    "advertiserId" : "15078244418"
  },
  {
    "advertiserName" : "ÖVP Bezirk Leibnitz",
    "advertiserId" : "107797583239658"
  },
  {
    "advertiserName" : "ÖVP Brigittenau",
    "advertiserId" : "487431744620111"
  },
  {
    "advertiserName" : "ÖVP Bruck an der Großglocknerstraße",
    "advertiserId" : "130598067022001"
  },
  {
    "advertiserName" : "ÖVP Favoriten",
    "advertiserId" : "117393008344627"
  },
  {
    "advertiserName" : "ÖVP für Sebastian Kurz",
    "advertiserId" : "1321832661269316"
  },
  {
    "advertiserName" : "ÖVP Gießhübl",
    "advertiserId" : "158827740980489"
  },
  {
    "advertiserName" : "ÖVP Götzis",
    "advertiserId" : "182783852085426"
  },
  {
    "advertiserName" : "ÖVP Greinbach",
    "advertiserId" : "102633810369507"
  },
  {
    "advertiserName" : "ÖVP Ilz",
    "advertiserId" : "116253752378759"
  },
  {
    "advertiserName" : "ÖVP - Orth an der Donau",
    "advertiserId" : "342973222304"
  },
  {
    "advertiserName" : "ÖVP Ottakring",
    "advertiserId" : "221960067918665"
  },
  {
    "advertiserName" : "ÖVP Rudolfsheim Fünfhaus",
    "advertiserId" : "399515876797551"
  },
  {
    "advertiserName" : "ÖVP Simmering",
    "advertiserId" : "503075049737701"
  },
  {
    "advertiserName" : "ÖVP Spital Steinhaus",
    "advertiserId" : "606677986135675"
  },
  {
    "advertiserName" : "ÖVP Stadt Fürstenfeld",
    "advertiserId" : "808762272583730"
  },
  {
    "advertiserName" : "ÖVP Wartberg ob der Aist",
    "advertiserId" : "1471795009812004"
  },
  {
    "advertiserName" : "SPÖ",
    "advertiserId" : "77393060080"
  },
  {
    "advertiserName" : "SPÖ-Bundesfrauen",
    "advertiserId" : "133416952970"
  },
  {
    "advertiserName" : "SPÖ Burgenland",
    "advertiserId" : "237290919634390"
  },
  {
    "advertiserName" : "SPÖ Donaustadt",
    "advertiserId" : "1693730624228317"
  },
  {
    "advertiserName" : "SPÖ Fasanviertel\/Arsenal",
    "advertiserId" : "1558183444395559"
  },
  {
    "advertiserName" : "SPÖ Floridsdorf Sektion 10 - Strebersdorf",
    "advertiserId" : "913685615343667"
  },
  {
    "advertiserName" : "SPÖ Frauen Oberösterreich",
    "advertiserId" : "444281059003458"
  },
  {
    "advertiserName" : "SPÖ Frauen Salzburg",
    "advertiserId" : "189493277069"
  },
  {
    "advertiserName" : "SPÖ-Frauen Tirol",
    "advertiserId" : "1392449987744104"
  },
  {
    "advertiserName" : "SPÖ im Parlament",
    "advertiserId" : "255318067965019"
  },
  {
    "advertiserName" : "SPÖ Land Salzburg",
    "advertiserId" : "142219720868"
  },
  {
    "advertiserName" : "SPÖ Langenzersdorf",
    "advertiserId" : "423439201125523"
  },
  {
    "advertiserName" : "SPÖ Leopoldstadt",
    "advertiserId" : "1397243117194859"
  },
  {
    "advertiserName" : "SPÖ Neusiedl am See",
    "advertiserId" : "269399976453503"
  },
  {
    "advertiserName" : "SPÖ Niederösterreich",
    "advertiserId" : "106739889401505"
  },
  {
    "advertiserName" : "SPÖ Oberösterreich",
    "advertiserId" : "208930355786005"
  },
  {
    "advertiserName" : "SPÖ Obersteiermark Ost",
    "advertiserId" : "639538052795950"
  },
  {
    "advertiserName" : "SPÖ Obersteiermark West",
    "advertiserId" : "328114213949960"
  },
  {
    "advertiserName" : "SPÖ Salzburg",
    "advertiserId" : "151181431276"
  },
  {
    "advertiserName" : "SPÖ Schwaz",
    "advertiserId" : "328124688567"
  },
  {
    "advertiserName" : "SPÖ Sektion 31",
    "advertiserId" : "875450075849145"
  },
  {
    "advertiserName" : "SPÖ Sektion Wels-Puchberg",
    "advertiserId" : "243812335738535"
  },
  {
    "advertiserName" : "SPÖ Stadtorganisation Amstetten",
    "advertiserId" : "912354165459699"
  },
  {
    "advertiserName" : "SPÖ Stadtorganisation Mank",
    "advertiserId" : "288016751637182"
  },
  {
    "advertiserName" : "SPÖ Steiermark",
    "advertiserId" : "143456819025728"
  },
  {
    "advertiserName" : "SPÖ Tirol",
    "advertiserId" : "172040642860223"
  },
  {
    "advertiserName" : "SPÖ Trofaiach",
    "advertiserId" : "170335519841639"
  },
  {
    "advertiserName" : "SPÖ Vorarlberg",
    "advertiserId" : "337372246351496"
  },
  {
    "advertiserName" : "SPÖ Watch",
    "advertiserId" : "508064915944646"
  },
  {
    "advertiserName" : "SPÖ Wels Sektion VIII",
    "advertiserId" : "868982719842116"
  },
  {
    "advertiserName" : "SPÖ Wien",
    "advertiserId" : "88108406133"
  }
]

export default advertisers
