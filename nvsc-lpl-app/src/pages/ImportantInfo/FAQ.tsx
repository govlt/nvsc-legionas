import React, {useEffect}from 'react';
import InfoHeader from '../../components/InfoHeader.tsx';

export const FAQ: React.FC = () => {
  useEffect(() => {
    return () => {window.scrollTo(0, 0);};
  }, []);
    
  return (
    <>
      <InfoHeader/>
      
      <div className="importantContainer">
        <h1 className="importantHeader">Dažnai užduodami klausimai</h1>
        <hr/>

        <details className="imporantInfoCollapsible">
          <summary className="importantInfoCollapsibleSummary importantTextHeader">Kaip atpažinti šią ligą, kokie jos požymiai?</summary>
          <p className="importantMainText">
            Legionierių ligai būdingas plaučių uždegimas, lydimas karščiavimo, kosulio, dusulio, raumenų ir galvos skausmo.
            Vidutiniškai 25-50 proc. pacientų gali viduriuoti, galimi sąmonės sutrikimai.
            Legionierių ligos vidutinis inkubacinis periodas (laikotarpis nuo užsikrėtimo iki simptomų atsiradimo) - 2-10 d. Retais atvejais iki 20 d.
          </p>
          <hr/>
        </details>

        <details className="imporantInfoCollapsible">
          <summary className="importantInfoCollapsibleSummary importantTextHeader">Kaip galiu užsikrėsti legionelioze?</summary>
          <p className="importantMainText">
            Legionelioze dažniausiai užsikrečiama įkvepiant aerozolio (smulkių vandens lašelių)
            su Legionella bakterijomis patekus į plaučius arba galimas ir tiesioginis sukėlėjo patekimas į kvėpavimo takus
            (pvz., respiracinės terapijos metu, valgant - užspringus).
            Liga neplinta nuo žmogaus žmogui. Neužsikrečiama geriant vandenį ar jį vartojant maisto ruošimui.
          </p>
          <hr/>
        </details>

        <details className="imporantInfoCollapsible">
          <summary className="importantInfoCollapsibleSummary importantTextHeader">Ar galiu užsikrėsti gerdamas vandenį?</summary>
          <p className="importantMainText">
            Ne, geriant vandenį šia liga neužsikrečiama.
          </p>
          <hr/>
        </details>

        <details className="imporantInfoCollapsible">
          <summary className="importantInfoCollapsibleSummary importantTextHeader">Kam kyla didesnė rizika susirgti legionelioze?</summary>
          <p className="importantMainText">
            Nors Legionella bakterijos yra plačiai paplitusios aplinkoje
            (nedideli jų kiekiai randami natūralioje aplinkoje: upių ir ežerų vandenyje, drėgname dirvožemyje,
            didesni - gamybinės ir visuomeninės paskirties vandens objektų karšto ir šalto vandens sistemose),
            žmonių imlumas yra labai nedidelis. Didesnė rizika susirgti legionelioze kyla vyresnio amžiaus asmenims,
            rūkantiesiems, asmenims, sergantiems cukriniu diabetu, lėtinėmis plaučių ligomis,
            onkologinėmis ligomis ir esant kitoms ligoms ar būklėms, slopinančioms imuninę sistemą.
          </p>
          <hr/>
        </details>

        <details className="imporantInfoCollapsible">
          <summary className="importantInfoCollapsibleSummary importantTextHeader">Kokios sąlygos palankios Legionella bakterijų augimui?</summary>
          <p className="importantMainText">
            Legionella bakterijoms daugintis palankiausia vandens temperatūra 20-45ºC.
            Maistinės medžiagos, kurios gaunamos iš vandens sistemose aptinkamų organizmų (pirmuonys, dumbliai ir kt.)
            bei nuosėdos, rūdys, dumblas (biofilmas) pagerina sąlygas joms daugintis.
          </p>
          <hr/>
        </details>

        <details className="imporantInfoCollapsible">
          <summary className="importantInfoCollapsibleSummary importantTextHeader">Kur šios bakterijos veisiasi dažniausiai?</summary>
          <p className="importantMainText">
            Legionella bakterijos veisiasi stovinčiame vandenyje, kurio temperatūra 20-45 ºC.
            Tai gali būti šalto ir karšto vandens sistemos, vandens maišytuvo ir dušo galvutės,
            tualetų bakeliai, aušinimo bokštai, garų kondensatoriai, baseinai, gydomosios vonios,
            karštosios versmės, fontanai, automatiniai purkštuvai, respiracinės terapijos įranga,
            transporto priemonių plovyklos, oro drėkintuvai, laistymo įrangos ir kt.
            <br/>
            Legionella bakterijos gali daugintis vamzdžiuose, jeigu vandens cirkuliacija sutrikusi,
            apnašomis padengtuose ir korozijos pažeistuose vamzdžiuose, dušuose ir čiaupuose,
            purvinuose, dumblu padengtuose vamzdžiuose ir talpyklų vidiniuose paviršiuose.
          </p>
          <hr/>
        </details>

        <details className="imporantInfoCollapsible">
          <summary className="importantInfoCollapsibleSummary importantTextHeader">Kaip apsisaugoti nuo legioneliozės?</summary>
          <p className="importantMainText">
            Pagrindinė legioneliozės prevencijos priemonė tinkama vandens sistemų eksploatacija.
            Tinkamas vandens temperatūros palaikymas vandens sistemose yra vienas
            iš pagrindinių legionierių ligos prevencijos būdų. Už daugiabučiuose
            namuose įrengtų karšto vandens sistemų priežiūrą, vandens temperatūrą
            ir saugą atsakingi pastatų prižiūrėtojai ar jų pasamdyti šildymo ir vandens sistemų prižiūrėtojai.
            Jeigu karštą vandenį ruošiame individualiai - ši atsakomybė tenka mums patiems. 
          </p>
          <hr/>
        </details>

        <details className="imporantInfoCollapsible">
          <summary className="importantInfoCollapsibleSummary importantTextHeader">Ką galiu padaryti aš pats, kad mano vanduo būtų saugus?</summary>
          <p className="importantMainText">
          Nesvarbu, ar naudojatės centralizuotai ruošiamo karšto vandens sistemomis,
          ar karštą vandenį ruošiate savarankiškai, kad išvengtumėte legioneliozės,
          turite laikytis šių taisyklių:
            <br/><br/>
          1. Nuleisti užsistovėjusį vandenį. Karštas vanduo tiekimo sistemose ne tik turi
          būti atitinkamos temperatūros, bet ir jose neužsistovėti. Būtent stovinčiame,
          netinkamos temperatūros vandenyje bakterijos ir linkusios daugintis, todėl po
          ilgesnės naudojimosi karštu vandeniu pertraukos, pavyzdžiui, grįžus iš 2 savaites
          ar ilgiau trukusių atostogų, pirmiausia būtina karštą vandenį iš kiekvieno namuose
          esančio čiaupo stipria srove nuleisti 5 minutes ir tik tuomet po juo praustis.
          Tiek laiko reikia, kad jūsų bute esančiuose vamzdynuose kurį laiką stovėjęs
          ir galimai nesaugus vanduo nubėgtų ir iš čiaupo pradėtų bėgti tinkamos temperatūros vanduo.
            <br/>
          2. Reguliariai valyti dušų galvutes ir čiaupus. Legionelioze užsikrečiama ne vandenį geriant
          ar naudojant jį maistui gaminti, o įkvėpus vandens lašelių - aerozolio, kuris susidaro, pavyzdžiui,
          prausiantis duše. Todėl itin svarbus dalykas, kurio negalima pamiršti - reguliarus čiaupų,
          dušo galvučių valymas. Būtent dušų galvutėse ar čiaupuose ilgainiui susikaupusiose nuosėdose gali
          atsirasti ir daugintis legionelės. Rekomenduojama šiuos įrenginius valyti bent kartą per mėnesį, kad neužkalkėtų.
            <br/>
          3. Palaikyti tinkamą temperatūrą. Kad vandens sistemose legionelių,
          būtina palaikyti tinkamą vandens temperatūrą: karštas vanduo visada turi
          būti pakankamai karštas (čiaupuose ne mažiau kaip 50 °C), o šaltas - visada pakankamai
          šaltas (ne daugiau kaip 20 °C). Nuosavų ar daugiabučių namų gyventojai,
          kurie patys savarankiškai ruošia karštą vandenį (naudodami elektrinius vandens šildytuvus, taip vadinamus „boilerius“),
          taip pat turi laikytis šios taisyklės. 
          </p>
          <hr/>
        </details>

        <details className="imporantInfoCollapsible">
          <summary className="importantInfoCollapsibleSummary importantTextHeader">Kokios temperatūros vanduo turi bėgti iš čiaupo?</summary>
          <p className="importantMainText">
          Karšto vandens temperatūra vartotojų čiaupuose turi būti ne žemesnė kaip 50 °C
          (išmatavus temperatūrą po 1 min., kai buvo atsuktas čiaupas ir paleistas vanduo).
          </p>
          <hr/>
        </details>

        <details className="imporantInfoCollapsible">
          <summary className="importantInfoCollapsibleSummary importantTextHeader">Kaip galiu suprasti, ar iš mano čiaupo bėga tinkamos temperatūros vanduo?</summary>
          <p className="importantMainText">
          Jeigu atsukus karštą vandenį po 1 min. ranką išlaikyti po juo yra nesunku,
          galite įtarti, kad vandens temperatūra nesiekia 50 laipsnių.
          Tokio karštumo vandenyje paprastai ranką išlaikyti turėtų būti per karšta.
          Be abejo, efektyviausia tuo įsitikinti, pamatavus vandens temperatūrą termometru.  
          </p>
          <hr/>
        </details>

        <details className="imporantInfoCollapsible">
          <summary className="importantInfoCollapsibleSummary importantTextHeader">Ką daryti, jeigu įtariu, kad iš čiaupo bėga nepakankamos temperatūros vanduo?</summary>
          <p className="importantMainText">
          Jei karštas vanduo ruošiamas individualiai, tuomet reikia pasitikrinti
          šildytuvo parametrus ir pakelti ruošiamo vandens temperatūrą.
          Jei gyvenate daugiabutyje ir karštas vanduo tiekiamas centralizuotai,
          kreipkitės į būsto administratorių ar namo bendrijos pirmininką.
          </p>
          <hr/>
        </details>

        <details className="imporantInfoCollapsible">
          <summary className="importantInfoCollapsibleSummary importantTextHeader">Kokiais atvejais daugiabučiame gyvenamajame name gali būti atliekama terminė dezinfekcija?</summary>
          <p className="importantMainText">
          Karšto vandens sistemas rekomenduojama plauti ir dezinfekuoti, kai jos
          pradedamos naudoti daugiau kaip po vieno mėnesio pertraukos, po vandens tiekimo
          sistemos rekonstrukcijos, remonto arba kai diagnozuojami vartotojų susirgimai
          legionelioze. Dezinfekcija gali būti terminė arba cheminė.

          Apie planuojamos karšto vandens sistemos dezinfekcijos atlikimo datą ir laiką,
          jos tikslus, trukmę ir būtinas saugos priemones pastato šildymo ir karšto vandens
          sistemų prižiūrėtojas (eksploatuotojas) ir karšto vandens tiekėjas ne vėliau
          kaip prieš dvi kalendorines dienas privalo raštu informuoti vartotojus.

          Jei atliekama terminė dezinfekcija (termošokas), svarbu, kad gyventojai 
          bendradarbiautų ir atliktų prašomus veiksmus – po terminės dezinfekcijos
          bent 5 minutėms atsuktų visus bute esančius karšto vandens čiaupus.         
          </p>
          <hr/>
        </details>
      </div>
    </>
  );
};
