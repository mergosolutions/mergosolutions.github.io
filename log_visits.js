// Supabase kliens inicializálása
const { createClient } = supabase;

const supabaseUrl = 'https://xyzcompany.supabase.co'; // A saját Supabase URL-ed
const supabaseKey = 'public-anon-key';               // A saját API kulcsod
const supabase = createClient(supabaseUrl, supabaseKey);

// Látogató IP címének lekérése egy külső szolgáltatással
fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const visitorIp = data.ip;
    const visitTime = new Date().toISOString();

    // Adatok beszúrása a Supabase adatbázisba
    supabase.from('visits').insert([
      { ip_address: visitorIp, visit_time: visitTime }
    ]).then(response => {
      if (response.error) {
        console.error('Hiba a rögzítés során:', response.error);
      } else {
        console.log('Látogatás sikeresen rögzítve:', response);
      }
    });
  })
  .catch(error => console.error('Hiba az IP lekérése során:', error));
