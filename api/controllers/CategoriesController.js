/**
 * CategoriesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    /**
   * categories index
   * @description :: categories index
   * @api {get} /categories/ categories index
   * @apiName categories index
   * @apiGroup Categories
   * @apiExample Example usage:
   * curl -i localhost:1337/categories/
   **/
    index: function(req, res, next) {
        Categories.find().exec(function(err, list) {
            if (err) return Error('Error');
            return res.view({
              result: list
            });
        });
    },

    /**
    * add categories 
    * @description :: add category 
    * @api {post} /category/ add category 
    * @apiName add category
    * @apiGroup categories
    * @apiExample Example usage:
    * curl -i localhost:1337/category/
    * @apiParam {String} categoryname
    * @apiParam {String} categoryurl
    * @apiSuccess {String} status ok.
    * @apiSuccess {String} message New category added successfully.
    * @apiSuccess {Object} data created category details
    **/

   add: async function(req,res,next) {
    let category = req.body.categoryname;
    let url = req.body.categoryurl;
    if (!category || category==null || category == undefined || category == "" || category.length == 0 || !url || url==null || url == undefined || url == "" || url.length == 0) {
        return res.badRequest();
    }else{
        let createCategoryObj = {
            category:category,
            url:url
        };
    }  
    category = await Categories.create(createCategoryObj).fetch();
    if(category){
        return res.send({
            status: 'ok',
            message: 'New category added successfully',
            data: brand
        });
    }
}

};

