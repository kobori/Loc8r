/* GET 'about' page */
module.exports.about = (req, res) => {
  res.render('generic-text', {
    title: 'About Loc8r',
    content: 'Loc8r was creatd to help people find places to sit down and get a bit of work done.\n\nLorem ipsum dolor sit amet, consectetur adipiscind elit. Nunc sed lorem ac nisi dignissim accumsan.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. '
  });
};