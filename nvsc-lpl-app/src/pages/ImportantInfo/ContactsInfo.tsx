import React, {useEffect} from 'react';
import InfoHeader from '../../components/InfoHeader.tsx';

export const ContactsInfo: React.FC = () => {
  useEffect(() => {
    const old = document.body.style.overflow;
    document.body.style.overflow = "scroll";
    return () => {
      window.scrollTo(0, 0);
      document.body.style.overflow = old;
    };}, []);

  return (
    <>
      <InfoHeader/>
      
      <div className="importantContainer">
        <h1 className="importantHeader">Kontaktinė informacija</h1>
        <hr/>
        

        
        <details className='imporantInfoCollapsible'>
          <summary className='importantInfoCollapsibleSummary importantTextHeader'>LR Aplinkos ministerija</summary>
          <p className="importantMainText">
            Atsakomybės:
            <br/>
            - Reglamentuoja šalto geriamojo
            vandens tiekimą, susijusį su
            geriamojo vandens mėginių
            paėmimo vietos nustatymu, skirtu
            geriamojo vandens saugai ir
            kokybei tikrinti.
            <p className='importantSmallText'>
              Geriamojo vandens tiekimo ir
              nuotekų tvarkymo įstatymas
              (20 str. 2 d. 14 p.)
            </p>
            <br/>
            Kontaktai:
            <br/>
            El. p. info@am.lt
            <br/>
            Tel. 8 626 22252
          </p>
          <hr/>
        </details>

        <details className='imporantInfoCollapsible'>
          <summary className='importantInfoCollapsibleSummary importantTextHeader'>LR Energetikos ministerija </summary>
          <p className="importantMainText">
            Atsakomybės:
            <br/>
            Užtikrina teisinį reglamentavimą
            šilumos ir karšto vandens sistemų
            priežiūros atžvilgiu.
            <br/><br/>
            Tvirtina:
            <br/>
            - Šilumos tiekimo ir vartojimo
            taisykles, kuriomis nustatomos
            šilumos (karšto vandens) tiekėjo,
            vartotojo, pastato valdytojo ir
            pastato šildymo ir karšto vandens
            sistemų prižiūrėtojo teisės ir
            pareigos;
            <br/>
            -Pastato šildymo ir karšto
            vandens sistemų priežiūros
            tvarkos aprašą, kuriuo nustatoma
            prižiūrėtojo veiklos atsakomybės
            ribos, teisės ir pareigos,
            privalomų darbų sąrašas ir
            apimtis.
            <br/><br/>
            Kontaktai:
            <br/>
            El. p. info@enmin.lt
            <br/>
            Tel. (8 5) 203 4696
          </p>
          <hr/>
        </details>

        <details className='imporantInfoCollapsible'>
          <summary className='importantInfoCollapsibleSummary importantTextHeader'>LR Sveikatos apsaugos ministerija</summary>
          <p className="importantMainText">
            Atsakomybės:
            <br/>
            Nustato geriamojo vandens ir
            karšto vandens, naudojamo
            buities reikmėms, visuomenės
            sveikatos saugos reikalavimus.
            <br/><br/>
            Kontaktai
            <br/>
            El. p. ministerija@sam.lt,
            <br/>
            Nemokama telefono linija
            <br/>
            8 800 66 004
          </p>
          <hr/>
        </details>

        <details className='imporantInfoCollapsible'>
          <summary className='importantInfoCollapsibleSummary importantTextHeader'>Valstybinė maisto ir veterinarijos tarnyba</summary>
          <p className="importantMainText">
            Vykdo:
            <br/>
            - geriamojo vandens ruošimo procesų priežiūrą;
            <br/>
            - geriamojo vandens saugos ir kokybės rodiklių
            laikymosi priežiūrą;
            <br/>
            - geriamojo vandens stebėsenos programų
            derinimą, šių programų vykdymo priežiūrą;
            <br/>
            - Nagrinėja vartotojų ir abonentų skundų dėl
            geriamojo vandens saugos ir kokybės;
            <br/>
            - Ima geriamojo vandens mėginius (pagal
            skundus ir priežiūros tikslu).
            <br/><br/>
            Kontaktai:
            <br/>
            Tel. 1879,
            <br/>
            El. paštas skundams:
            <br/>
            skundai@vmvt.lt,
            <br/>
            El. paštas pasiteiravimams:
            <br/>
            klausimai@vmvt.lt
          </p>
          <hr/>
        </details>

        <details className='imporantInfoCollapsible'>
          <summary className='importantInfoCollapsibleSummary importantTextHeader'>Valstybinė energetikos reguliavimo taryba </summary>
          <p className="importantMainText">
            Atsakomybės:
            <br/>
            - Nagrinėja vartotojų skundus dėl
            karšto vandens parametrų
            atitikimo HN reikalavimams;
            <br/>
            - dalyvauja komisijų darbe, kurios
            nagrinėja ginčus tarp BNO
            vartotojo, prižiūrėtojo, šilumos ir/ar
            karšto vandens tiekėjo.
            <br/><br/>
            Kontaktai:
            <br/><br/>
            Vilniaus TS
            <br/>
            Mindaugas Kapočius
            <br/>
            mindaugas.kapocius@vert.lt
            <br/>
            8 (659) 79 469
            <br/>
            Dmitrij Krivochiža
            <br/>
            dmitrij.krivochiza@vert.lt
            <br/>
            8 (646) 00 156
            <br/><br/>
            Kauno TS
            <br/>
            Raimundas Valauskis
            <br/>
            raimundas.valauskis@vert.lt
            <br/>
            8 (616) 96 717
            <br/>
            Giedrius Mackevičius
            <br/>
            giedrius.mackevicius@vert.lt
            <br/>
            8 (615) 25 478
            <br/><br/>
            Klaipėdos TS
            <br/>
            Asta Ščiukaitytė
            <br/>
            asta.sciukaityte@vert.lt
            <br/>
            8 (618) 22 971
            <br/>
            Jurgita Grigonienė
            <br/>
            jurgita.grigoniene@vert.lt
            <br/>
            8 (616) 14 708
            <br/><br/>
            Šiaulių TS
            <br/>
            Rolandas Mikalauskas
            <br/>
            rolandas.mikalauskas@vert.lt
            <br/>
            8 (615) 25 414
            <br/>
            Algirdas Janulis
            <br/>
            algirdas.janulis@vert.lt
            <br/>
            8 (618) 28 722
          </p>
          <hr/>
        </details>

        <details className='imporantInfoCollapsible'>
          <summary className='importantInfoCollapsibleSummary importantTextHeader'>Nacionalinis visuomenės sveikatos centras</summary>
          <p className="importantMainText">
            Atsakomybės:
            <br/>
            - Nustačius legioneliozės atvejį, atlieka
            epidemiologinį tyrimą, siekdamas išsiaiškinti
            užsikrėtimo aplinkybes ir užkirsti kelią ligos
            plitimui;
            <br/>
            - Tikrina įvairių paslaugų teikėjus (pvz.,
            apgyvendinimo, asmens sveikatos priežiūros
            įstaigas ir kt.), ar jos užtikrina karšto ir šalto
            vandens temperatūrą čiaupuose, ar laiku
            atlieka vandens mikrobiologinius tyrimus,
            reikalingus legioneliozės prevencijai;
            <br/>
            - Teikia informaciją visuomenei apie
            legioneliozės prevencijos priemones;
            <br/>
            - Pagal kompetenciją konsultuoja ūkio
            subjektus, legioneliozės prevencijos
            klausimais.
            <p className='importantSmallText'>
              Lietuvos higienos normos HN 24:2023 „Geriamojo
              vandens saugos ir kokybės reikalavimai“ patvirtinta
              Lietuvos Respublikos sveikatos apsaugos ministro
              2003 m. liepos 23 d. įsakymu Nr. V-455, kurioje
              nustayti geriamojo vandens ir naudojamo karšto
              vandens saugos ir kokybės reikalavimai;
              <br/>
              Lietuvos higienos normos HN 136:2023 „Karšto
              vandens visuomenės sveikatos saugos reikalavimai“
              patvirtinta Lietuvos Respublikos sveikatos apsaugos
              ministro 2023 m. birželio 20 d. įsakymu Nr. V-710
            </p>
            <br/>
            Kontaktai:
            <br/>
            Konsultacijų tel. nr. (8 5) 264 967
          </p>
          <hr/>
        </details>

        

        <details className='imporantInfoCollapsible'>
          <summary className='importantInfoCollapsibleSummary importantTextHeader'>BNO administratorius</summary>
          <p className="importantMainText">
            BNO – bendrojo naudojimo objektai, kaip bendros patalpos,
            laiptinės, stogas, bendri koridoriai ir panašiai, kurių
            nuosavybės teisė bendrai priklauso visiems pastato savininkams.
            <br/><br/>
            BNO administratorius: pastato administratorius/bendrija/jungtinės
            veiklos sutarties dalyvis, kuris prižiūri bendrojo naudojimo
            objektus ir galimai šilumos punktus. Šilumos punktą taip pat
            gali administruoti nebūtinai tik BNO administratorius, bet
            ir pvz. bendrijos pirmininkas. Dažniausiai šilumos punktą
            prižiūri centriniai šilumos tinklai, pastatą administruojanti
            įmonė (pvz.: “Mano būstas”, “Senamiesčio ūkis” ir panašiai).
            <br/><br/>
            Atsako už:
            <br/>
            - Reikiamą temperatūrą butuose;
            <br/>
            - Karšto vandens temperatūrą;
            <br/>
            - Kokybišką pastato šildymo ir karšto
            vandens sistemų priežiūrą;
            <br/>
            - Vidaus šildymo sistemų avarijų
            likvidavimą;
            <br/>
            - Pastato šildymo ir karšto vandens
            sistemų paruošimą šildymo sezonui;
            <br/>
            - Informuoja apie prevencines
            priemones.
            <br/><br/>
            Kontaktai:
            <br/>
            Kiekvieno pastato bendro naudojimo patalpų administratorius gali skirtis. Susisiekite su jūsų bendrijos pirminku(-e), šią informaciją turėtumet gauti iš jo.
          </p>
          <hr/>
        </details>

        <details className='imporantInfoCollapsible'>
          <summary className='importantInfoCollapsibleSummary importantTextHeader'>Centriniai šilumos tinklai</summary>
          <p className="importantMainText">
            Atsakomybės:
            <br/>
            - Karšto vandens tiekėjas atsako už
            karšto vandens temperatūrinių
            parametrų nukrypimus, nuo
            nustatytų galiojančiuose teisės
            aktuose ir karšto vandens
            pirkimo-pardavimo sutartyje, bei
            karšto vandens kokybę (ŠTVT
            232.1 p.p.);
            <br/>
            - Užtikrina tinkamos temperatūros
            termofikato tiekimą;
            <br/>
            Matuoja termofikato temperatūrą
            šildymo punktuose;
            <br/>
            - Tikrina karšto vandens parametrus
            ne rečiau kaip 2-3 x per savaitę
            žiemos metu; 1 x per savaitę -
            vasaros metu;
            <br/>
            - sprendžia problemas.
            <br/><br/>
            Kontaktai:
            <br/>
            Susisiekite su savo miesto
            vietovės centriniais šilumos
            tinklais.
          </p>
          <hr/>
        </details>

        <details className='imporantInfoCollapsible'>
          <summary className='importantInfoCollapsibleSummary importantTextHeader'>Geriamo vandens tiekėjai</summary>
          <p className="importantMainText">
            Atsakomybės:
            <br/>
            Atsako už geriamojo vandens
            saugą ir kokybę iki įvadų į
            vartotojams ir (arba) abonentams
            nuosavybės teise priklausančių ar
            kitaip valdomų ir (arba)
            naudojamų pastatų vidaus
            vandentiekį. Geriamojo vandens
            tiekėjai atlieka savo tiekiamo
            geriamojo vandens stebėseną
            pagal sveikatos apsaugos ministro
            nustatytus reikalavimus.
            <br/><br/>
            Kontaktai:
            <br/>
            Susisiekite su savo vietovės
            geriamo vandens tiekėju.
          </p>
          <hr/>
        </details>

        <details className='imporantInfoCollapsible'>
          <summary className='importantInfoCollapsibleSummary importantTextHeader'>Savivaldybių administracijos</summary>
          <p className="importantMainText">
            Atsakomybės:
            <br/>
            - Savivaldybė atsakinga už geriamojo vandens tiekimą teritorijose, kuriose įrengti centralizuoti
            vandentiekio tinklai ir kurie nuosavybės teise ar kitais pagrindais priklauso viešajam geriamojo
            vandens tiekėjui;
            <br/>
            - Savivaldybių tarybų sprendimu paskiriamas viešasis vandens tiekėjas (vienas, arba keli, jei
            tokia galimybė yra), turintis šiai veiklai licenciją;
            <br/>
            - Savivaldybės sprendžia ir nagrinėja gyventojų prašymus ir skundus dėl geriamojo vandens
            tiekimo sutrikimų, vandens kokybės neužtikrinimo, numato investicijas ir finansavimo
            infrastruktūros plėtrai;
            <br/>
            - Savivaldybė įvertinusi situaciją, kuomet privatiems asmenims priklausančių vandens tiekimo
            sistemų ir infrastruktūros (vandens bokštai, vandentiekio tinklai), kurie prastai prižiūrimi, į juos
            savininkai neinvestuoja, galiausiai pradeda gesti, neužtikrina geriamojo vandens kokybės,
            gyventojams pageidaujant gali perimti privačius vandens bokštus arba įrengti naują geriamojo
            vandens infrastruktūrą;
            <br/>
            - Savivaldybių tarybos, vadovaudamosi teisės aktu, nustato daugiabučių namų šildymo ir karšto
            vandens sistemų priežiūros maksimalius tarifus;
            <br/>
            - Savivaldybės atsakingos už vandens tiekimo ir nuotekų tvarkymo specialiųjų planų parengimą
            ir aglomeracijų ribų nustatymą (rengiami specialieji teritorijų planavimo dokumentai tvirtinami
            Tarybose).
            <br/><br/>
            Kontaktai:
            <br/>
            Susisiekite su savo vietovės
            savivaldybe
          </p>
        </details>
        <br/><br/>
      </div>
    </>
  );
};
