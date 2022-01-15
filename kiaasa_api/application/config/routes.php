<?php
defined('BASEPATH') OR exit('No direct script access allowed');

// WEBSITE
$route['default_controller'] = 'backend/dashboard/';



/************************************************************/
//app api

$route['userlogin'] = 'api/auth/auth/userLogin';
$route['userregister'] = 'api/auth/auth/userRegister';
$route['updatepassword'] = 'api/auth/auth/updateUserPassword';








/************************************************************/
//admin api
$route['v1/createbrand'] = 'api/backend/brand/createbrand';
$route['v1/updatebrand/(:any)'] = 'api/backend/brand/updatebrand/$1';
$route['v1/delete-image'] = 'backend/media/deleteimage';









/************************************************************/
//admin panel
$route['dashboard'] = 'backend/dashboard/index';

$route['brand'] = 'backend/brand/index';
$route['add-brand'] = 'backend/brand/add';
$route['edit-brand-(:any)'] = 'backend/brand/edit/$1';
$route['media'] = 'backend/media/index';
$route['get-media'] = 'backend/media/getMedia';
$route['media-upload'] = 'backend/media/fileUpload';


$route['category'] = 'backend/category/index';
$route['add-category'] = 'backend/category/add';
$route['edit-category-(:any)'] = 'backend/category/edit/$1';
$route['delete-category-(:any)'] = 'backend/category/delete/$1';


$route['subcategory'] = 'backend/subcategory/index';
$route['add-subcategory'] = 'backend/subcategory/add';
$route['edit-subcategory-(:any)'] = 'backend/subcategory/edit/$1';
$route['delete-subcategory-(:any)'] = 'backend/subcategory/delete/$1';


$route['subcategorytype'] = 'backend/subcategorytype/index';
$route['add-subcategorytype'] = 'backend/subcategorytype/add';
$route['edit-subcategorytype-(:any)'] = 'backend/subcategorytype/edit/$1';
$route['delete-subcategorytype-(:any)'] = 'backend/subcategorytype/delete/$1';



$route['orders'] = 'backend/order/index';
$route['get-order'] = 'backend/order/getOrder';










$route['type'] = 'backend/type/index';
$route['gst'] = 'backend/gst/index';

$route['v1/getallimages'] = 'backend/media/getAllImage';



$route['products'] = 'backend/product/index';
$route['get-product'] = 'backend/product/getProduct';
$route['add-product'] = 'backend/product/add';

$route['edit-product-(:any)'] = 'backend/product/edit/$1';

$route['getsubcategory'] = 'backend/category/getSubCategory';
$route['getsubcategorytype'] = 'backend/subcategory/getSubCategoryType';








$route['v1/updatebrand/(:any)'] = 'api/backend/brand/updatebrand/$1';

$route['v1/dashboard'] = 'backend/dashboard/index';














$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;
