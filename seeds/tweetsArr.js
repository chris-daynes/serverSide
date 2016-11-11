exports.seed = (knex, Promise) => {
  return Promise.join(
    // Deletes ALL existing entries
    knex('tweets').del(),
      // Inserts seed entries
      knex('tweets').insert({
        date: 'Fri Nov 11 01:44:43 +0000 2016',
        text: 'RT @jrbullington: NOLA anti-Trump march has started.',
        author: 'Yettaaaa7',
        city: 'WithBae',
        subject: 'trump' }),
      knex('tweets').insert({
        date: 'Fri Nov 11 01:44:43 +0000 2016',
        text: 'RT @AlejandroMairan: El hijo no reconocido de Donald Trump.',
        author: 'santifeldmann',
        city: 'San Nicolás de los arroyos ',
        subject: 'trump'}),
      knex('tweets').insert({
        date: 'Fri Nov 11 01:44:42 +0000 2016',
        text: 'RT @madhukishwar: The bottom line is Hillary hates India, is sold to safeguarding Pak &amp; Islamist interests.',
        author: 'KRIRIS3322',
        city: 'Mumbai,India ',
        subject: 'hillary'}),
      knex('tweets').insert({
        date: 'Fri Nov 11 01:44:42 +0000 2016',
        text: 'RT @qz: The US election wasn’t about surge—Democrats just didn\'t show up for Clinton.',
        author: 'dodywrites',
        city: 'New York',
        subject: 'hillary'}),
      knex('tweets').insert({
        date: 'Fri Nov 11 02:26:10 +0000 2016',
        text: 'RT @brocuba_: Takut dengan manifesto Donal Trump. Kita kat Malaysia ni hudud siapa tolak? Bapak dajal??\n\n*jap!! Nak deactivate twitter hehe*',
        author: 'saffiya_nurul',
        city: 'Penang',
        subject: 'trump'}),
      knex('tweets').insert({
        date: 'Fri Nov 11 02:26:10 +0000 2016',
        text: 'RT @itvnews: Second night of Trump Tower protests in New York',
        author: 'sharon_hampton',
        city: 'New York',
        subject: 'trump'}),
      knex('tweets').insert({
        date: 'Fri Nov 11 02:26:10 +0000 2016',
        text: 'I think Trump is picking cabinet members just off of who he saw last, like the guy whose favorite movie is always the last movie they saw.',
        author: 'TheFiesta13',
        city: 'Blaine, Ne.',
        subject: 'trump'}),
      knex('tweets').insert({
        date: 'Fri Nov 11 02:32:20 +0000 2016',
        text: 'Electoral College Electors: Electoral College Make Hillary Clinton President on December 19 - Sign the Petition!',
        author: 'bree_idiot',
        city: 'NYC',
        subject: 'hillary'}),
      knex('tweets').insert({
        date: 'Fri Nov 11 02:32:20 +0000 2016',
        text: 'RT @40ozGOOFY: "Hillary? WACK"\n"Donald? WACK"\n"Gary Johnson? WACK"\n"ME? I\'m tight as fu-"',
        author: 'JaqueeHernandez',
        city: 'las vegas',
        subject: 'hillary'}),
      knex('tweets').insert({
        date: 'Fri Nov 11 02:32:20 +0000 2016',
        text: 'RT @AdamParkhomenko: Many asking how to send Hillary a thank you note in the mail...here: \nHillary Rodham Clinton\nPost Office Box 5256 \nNew…',
        author: 'TheRealHarMarO',
        city: 'Orange Park, FL',
        subject: 'hillary'}),
      knex('tweets').insert({
        date: 'Fri Nov 11 02:34:53 +0000 2016',
        text: 'RT @kylegriffin1: Don\'t forget: Hillary Clinton is the first woman in our nation\'s history to win the popular vote in a presidential electi…',
        author: 'brynmorgan_',
        city: 'number 12 grimmauld place',
        subject: 'hillary'}),
      knex('tweets').insert({
        date: 'Fri Nov 11 02:34:53 +0000 2016',
        text: '@realDonaldTrump Hillary behind bars is still going to happen?',
        author: 'DCUO_Reaper',
        city: 'Wild Wild West',
        subject: 'hillary'})
  )}
