const { heroes } = require("../data/heroes");

export const getHeroByPublisher = (publisher) => {
  const validPublisher = ["DC Comics", "Marvel Comics"];

  if (!validPublisher.includes(publisher)) {
    throw new Error(`El publisher "${publisher}" no es válido`);
  }

  return heroes.filter((hero) => hero.publisher === publisher);
};
