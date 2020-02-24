/**
 * ProductsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    /**
   * product fetch
   * @description :: retrieve products details information
   * @api {get} /fetchProduct/ 
   * @apiName product fetch
   * @apiGroup products
   * @apiExample Example usage:
   * curl -i localhost:1337/fetchProduct/
   * @apiParam {String} website
   * @apiParam {Number} is_brand
   * @apiParam {Number} brand_id
   * @apiParam {Number} categoryid
   * 
   **/
  compare_price : async function(req,res,next){
    let website = req.param('website');
    let is_brand = req.param('is_brand');
    let brand_id = req.param('brand_id');
    let category_id = req.param('category_id');
    if(is_brand==1){
        var product_details = await Products.find({
          where:{ 
            brand_id:brand_id,
            p_url:website
          }
        })
        .populate('brands')
        .populate('categories');
    }else{
        var product_details = await Products.find({
          where:
          {
            category_id:category_id,
            p_url:website
          }
        })
        .populate('brands')
        .populate('categories');
    }

    if(product_details){
      return res.send({
          status: 'ok',
          message: 'Deatils fetched successfully',
          data: product_details
      });
  }
    
  }
};

