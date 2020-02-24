/**
 * BrandsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  /**
   * brands index
   * @description :: brands index
   * @api {get} /brands/ brands index
   * @apiName brands index
   * @apiGroup brands
   * @apiExample Example usage:
   * curl -i localhost:1337/brands/
   **/
    index: function(req, res, next) {
        Brands.find().exec(function(err, list) {
            if (err) return Error('Error');
            return res.view({
                result: list
            });
        });
    },

    /**
    * add brands 
    * @description :: add brand 
    * @api {post} /brand/ add brand 
    * @apiName add brand 
    * @apiGroup brands
    * @apiExample Example usage:
    * curl -i localhost:1337/brand/
    * @apiParam {String} brandname
    * @apiParam {String} brandurl
    * @apiSuccess {String} status ok.
    * @apiSuccess {String} message New brand added successfully.
    * @apiSuccess {Object} data created brand details
    **/

    add: async function(req,res,next) {
        let brand = req.body.brandname;
        let url = req.body.brandurl;
        if (!brand || brand==null || brand == undefined || brand == "" || brand.length == 0 || !url || url==null || url == undefined || url == "" || url.length == 0) {
            return res.badRequest();
        }else{
            let createBrandObj = {
                brand:brand,
                url:url
            };
        }
        brand = await Brands.create(createBrandObj).fetch();
        if(brand){
            return res.send({
                status: 'ok',
                message: 'New brand added successfully',
                data: brand
            });
        }
    }
};

