const axios = require('axios');

const primiZahtev = async(req, res) => {
    // Izvlacenje JSON podataka iz req.body neophodnih za slanje na servis Moj-eRacun
    const {Username, Password, CompanyId, SoftwareId, SendToCir ,File} = req.body;
    // Preuzimanje api kljuca iz header-a (ako je neophodno)
    const Api = JSON.stringify(req.headers['apikey']);

    // try i catch blok, za vracanje erora u resp ako nesto nije u redu
    try {
        // Za one koji koriste konzolu - ispis texta i ispis informacija o poslu
        console.log('\x1b[31m', 'U toku je slanje podataka servisu Moj-eRačun...')

        // Ispis podataka za slanje
        console.log('Slanje sledecih podataka: \n');
        console.log(' \n Username:' + Username + ' \n Password' + Password + ' \n ComapnyId: ' + CompanyId + ' \n  SendToCir: ' + SendToCir);
        // slanje zahteva servisu i smestanje odgovora u resp - korisice se kasnije za vracanje informacije
        const resp = await axios.post('https://www.moj-eracun.rs/apis/v2/send', {
            Username: Username, 
            Password: Password, 
            CompanyId: CompanyId, 
            SoftwareId: SoftwareId,
            SendToCir: SendToCir, 
            File: File}, {
            headers: {
            'Content-Type':'application/json',
            'ApiKey': `${Api}`,
            'Accept':'*/*'
        }
    })

    // informisanje korisnika da je racun poslat i ispis u konzoli (ako je koriste)
    console.log('\x1b[32m', 'Racun je uspesno poslat!. \n Status racuna:');
    // resp.data - servis vraca podatke o fakturi u delu resp.data i to je sve sto je potrebno od informacija o fakturi
    console.log('\x1b[34m', resp.data);
    console.log('\x1b[32m', 'Sada mozete', '\x1b[31m', 'zatvoriti prozor!');
    // vracanje neophodnih informacija o fakturi i obavestenje o statusu
    return res.status(200).json(resp.data) 
    } catch (error) {
        // Informisanje o eroru koji se desio i ispis istog u konzoli
        console.log('\x1b[31m', 'Desila se greska tokom slanja racuna! \n Greska je:');
        console.log('\x1b[31m', error);
        // vracanje erora u resp i ispis isto u json formatu (nema dela kao sto je .data vec je potrebno vratiti ceo eror)
        return res.status(400).json(error)
    }
    
}

// link za slanje demo faktura, koristi se za testiranje
const demoZahtev = async(req, res) => {
    const {Username, Password, CompanyId, SoftwareId, SendToCir, File} = req.body;
    const Api = JSON.stringify(req.headers['apikey']);

    try {
        console.log('\x1b[31m', 'U toku je slanje podataka servisu Moj-eRačun...')
        console.log('Slanje sledecih podataka: \n');
        console.log(' \n Username:' + Username + ' \n Password' + Password + ' \n ComapnyId: ' + CompanyId + ' \n SendToCir: ' + SendToCir);
        const resp = await axios.post('https://demo.moj-eracun.rs/apis/v2/send', {
            Username: Username, 
            Password: Password, 
            CompanyId: CompanyId, 
            SoftwareId: SoftwareId,
            SendToCir: SendToCir, 
            File: File}, {
            headers: {
            'Content-Type':'application/json',
            'Accept':'*/*'
        }
    })

    console.log('\x1b[32m', 'Racun je uspesno poslat!. \n Status racuna:');
    console.log('\x1b[34m', resp.data);
    console.log('\x1b[32m', 'Sada mozete', '\x1b[31m', 'zatvoriti prozor!');
    return res.status(200).json(resp.data) 
    } catch (error) {
        console.log('\x1b[31m', 'Desila se greska tokom slanja racuna! \n Greska je:');
        console.log('\x1b[31m', error);
        return res.status(400).json(error)
    }
}

// provera statusa racuna - demo verzija
const getStatusDemo = async(req,res) => {
    const {Username, Password, CompanyId, SoftwareId, ElectronicId} = req.body;

    try {
        console.log('\x1b[31m', 'U toku je provera statusa za odredjeni racun...');
        const resp = await axios.post('https://demo.moj-eracun.rs/apis/v2/queryDocumentProcessStatusOutbox', {
            Username: Username,
            Password: Password,
            CompanyId: CompanyId,
            SoftwareId: SoftwareId,
            ElectronicId: ElectronicId
        }, { headers: {
            'Content-Type':'application/json',
            'Accept':'*/*'
        }});
        console.log('\x1b[32m', 'Racun je uspesno proveren!. \n Status racuna:');
        console.log('\x1b[34m', resp.data[0].StatusId);
        console.log('\x1b[32m', 'Sada mozete', '\x1b[31m', 'zatvoriti prozor!');
        return res.status(200).json(resp.data[0].StatusId) 
    } catch (error) {
        console.log('\x1b[31m', 'Desila se greska tokom provere stanja racuna! \n Greska je:');
        console.log('\x1b[31m', error);
        return res.status(400).json(error)
    }
}

const getStatus = async(req, res) => {
    // Izvlacenje JSON podataka iz req.body neophodnih za proveru podataka na servisu Moj-eRacun
    const {Username, Password, CompanyId, SoftwareId, ElectronicId} = req.body;

    try {
        console.log('\x1b[31m', 'U toku je provera statusa za odredjeni racun...');
        const resp = await axios.post('https://moj-eracun.rs/apis/v2/queryDocumentProcessStatusOutbox', {
            Username: Username,
            Password: Password,
            CompanyId: CompanyId,
            SoftwareId: SoftwareId,
            ElectronicId: ElectronicId
        }, 
        { headers: {
            'Content-Type':'application/json',
            'Accept':'*/*'
        }});
        // ispis statusa - StatusId moze biti 30 (slanje fakture u toku) i 40 (faktura je preuzeta)
        console.log('\x1b[32m', 'Racun je uspesno proveren!. \n Status racuna:');
        console.log('\x1b[34m', resp.data[0].StatusId);
        console.log('\x1b[32m', 'Sada mozete', '\x1b[31m', 'zatvoriti prozor!');
        // ispis statusa - StatusId moze biti 30 (slanje fakture u toku) i 40 (faktura je preuzeta)
        // rest.data[0] - servis vraca niz a proverava se samo 1 racun - to je razlog za pisanje resp.data[0], takodje je potrebno samo
        // vratiti statusId jer ostale informacije o racunu su sacuvane kada se slao post req za kreiranje fakture (primiZahtev)
        return res.status(200).json(resp.data[0].StatusId) 
    } catch (error) {
        console.log('\x1b[31m', 'Desila se greska tokom provere stanja racuna! \n Greska je:');
        console.log('\x1b[31m', error);
        return res.status(400).json(error)
    }
}

module.exports = {primiZahtev, demoZahtev, getStatusDemo, getStatus}