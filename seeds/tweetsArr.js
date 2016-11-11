exports.seed = (knex, Promise) => {
  return Promise.join(
    // Deletes ALL existing entries
    knex('tweets').del(),
      // Inserts seed entries
      knex('tweets').insert({
        date: 'Fri Nov 11 01:44:43 +0000 2016',
        text: 'RT @jrbullington: NOLA anti-Trump march has started. @NOLAnews https://t.co/m9q8Ts9NMx',
        author: 'Yettaaaa7',
        city: 'WithBae',
        subject: 'trump' }),
      knex('tweets').insert({
        date: 'Fri Nov 11 01:44:43 +0000 2016',
        text: 'RT @AlejandroMairan: El hijo no reconocido de Donald Trump: https://t.co/UimUpIKiWd',
        author: 'santifeldmann',
        city: 'San Nicolás de los arroyos ',
        subject: 'trump'}),
      knex('tweets').insert({
        date: 'Fri Nov 11 01:44:42 +0000 2016',
        text: 'RT @madhukishwar: The bottom line is Hillary hates India, is sold to safeguarding Pak &amp; Islamist interests. Trump will be pro-India, anti P…',
        author: 'KRIRIS3322',
        city: 'Mumbai,India ',
        subject: 'hillary'}),
      knex('tweets').insert({
        date: 'Fri Nov 11 01:44:42 +0000 2016',
        text: 'RT @qz: The US election wasn’t about a Trump surge—Democrats just didn\'t show up for Clinton https://t.co/GYWtJeoe7t https://t.co/Bu7xXAwJJ5',
        author: 'dodywrites',
        city: 'New York',
        subject: 'hillary'})
    )}
