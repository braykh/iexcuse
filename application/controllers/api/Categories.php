<?php

defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
/** @noinspection PhpIncludeInspection */
require APPPATH . '/libraries/REST_Controller.php';
require_once APPPATH . '/libraries/JWT.php';
use \Firebase\JWT\JWT;
/**
 * This is an example of a few basic user interaction methods you could use
 * all done with a hardcoded array
 *
 * @package         CodeIgniter
 * @subpackage      Rest Server
 * @category        Controller
 * @author          Phil Sturgeon, Chris Kacerguis
 * @license         MIT
 * @link            https://github.com/chriskacerguis/codeigniter-restserver
 */
class Categories extends \Restserver\Libraries\REST_Controller {

    function __construct()
    {
        // Construct the parent class
        parent::__construct();
        $this->load->model('categories_model');
        $this->load->library('session');
        $this->load->helper('cookie');
    }

    public function all_categories_get(){
        $categories = $this->categories_model->get_categories();
        $this->response($categories, 200); 
    }

    public function update_category_post(){
        if($this->session->userdata('user_id')){
            $data = $this->post();
            $this->response($this->categories_model->update_category($data["id"],$data),200);
        }else{
            $this->response(array("data" => "User does not have permissions."), 200);
        }
    }

    public function create_category_post(){
        if($this->session->userdata('user_id')){
            $data = $this->post();
            $this->response($this->categories_model->create_category($data),200);
        }else{
            $this->response(array("data" => "User does not have permissions."), 200);
        }
    }

    public function delete_category_post(){
        if($this->session->userdata('user_id')){
            $data = $this->post();
            $this->response($this->categories_model->delete_category($data["id"]),200);
        }else{
            $this->response(array("data" => "User does not have permissions."), 200);
        }
    }

}
