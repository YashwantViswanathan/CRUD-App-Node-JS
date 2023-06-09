exports.homepage = async(req, res) => {

    res.render('index', {title: 'Homepage'})

}

exports.searchPost = async(req, res) => {
    try {
      let searchTerm = req.body.searchTerm;
      let post = await Post.find( { $text: { $search: searchTerm, $diacriticSensitive: true } });
      res.render('search', { title: 'Your Blog - Search', post } );
    } catch (error) {
      res.satus(500).send({message: error.message || "Error Occured" });
    }
    
  }
  

exports.submitpost = async(req, res) => {

    res.render('create-post', {title: 'Create Post'})

}

exports.submitRecipeOnPost = async(req, res) => {
    res.redirect('/create-post')
    
}