/*
O nome das cidades avaliadas.
O conteúdo do roteiro A de cada cidade avaliada.
Quantos locais são citados no roteiro A de cada cidade.
O nome dos pontos turísticos localizados no bairro Centro da cidade de São Paulo.
O nome dos pontos turísticos localizados no bairro Downtown da cidade de Los Angeles.
*/



const texto =
  "<html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554, a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil. Aqui vão três dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905. É considerada oficialmente como uma cidade desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu Nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital russa fica situada às margens do Rio Moscou e, apesar de ser a cidade mais cosmopolita da Rússia, grande parte de sua história está preservada<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body></html>";

//Nome das cidades
const regexCities = /->\d - Roteiros para \*(.*?)\*/g;
const cities = [...texto.matchAll(regexCities)].map((match) => match[1]);

//Roteiro A de cada cidade
const regexRoutesA = /#Roteiro A \| Região:.*?<br>(.*?)<br>#Roteiro/g;

//Conteúdo do roteiro A de cada cidade
const routesA = [...texto.matchAll(regexRoutesA)].map((match) => match[1]);

//Quantidades de locais roteiro A de cada cidade
const locationsByRouteA = routesA.map(
  (roteiro) =>
    roteiro
      .split(";")
      .map((local) => local.trim())
      .filter((local) => local !== "").length
);

//Pontos turísticos no Centro da cidade de São Paulo
const regexTouristSpotsSP = /#Roteiro B \| Região: Centro<br>(.*?)<br>/;
const touristSpotsCentroSP = texto
  .match(regexTouristSpotsSP)[1]
  .split(";")
  .map((local) => local.trim());

//Pontos turísticos em Downtown da cidade de Los Angeles
const regexTouristSpotsLA = /#Roteiro B \| Região: Downtown<br>(.*?)<br>/;
const touristSpotsDowntownLA = texto
  .match(regexTouristSpotsLA)[1]
  .split(";")
  .map((local) => local.trim())
  .filter((ponto) => ponto.length > 0);

function showData() {
  const citiesEl = document.getElementById("item-1");
  const routesAEl = document.getElementById("item-2");
  const locationsByRouteAEl = document.getElementById("item-3");
  const touristSpotsCentroSPEl = document.getElementById("item-4");
  const touristSpotsDowntownLAEl = document.getElementById("item-5");

  citiesEl.innerHTML = cities.join(", ");
  routesAEl.innerHTML = routesA;
  let locationsAndCities = cities.map((city, index) => {
    return `${city}: ${locationsByRouteA[index]}`;
  });
  locationsByRouteAEl.innerHTML = locationsAndCities.join(", ");
  touristSpotsCentroSPEl.innerHTML = touristSpotsCentroSP.join(", ");
  touristSpotsDowntownLAEl.innerHTML = touristSpotsDowntownLA.join(", ");
}

window.onload = showData;
