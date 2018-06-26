<?php

defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
/** @noinspection PhpIncludeInspection */
require APPPATH . '/libraries/REST_Controller.php';

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
class Users extends \Restserver\Libraries\REST_Controller {

    function __construct()
    {
        // Construct the parent class
        parent::__construct();
        $this->load->model('users_model');
        $this->load->library('session');

    }

    public function all_users_get()
    {
        $users = $this->users_model->get_users();
        $this->response($users, 200);
    }

    public function get_current_get(){
        $user_id = $this->session->userdata('user_id');
        $user_email = $this->session->userdata('user_email');
        if( $user_id && $user_email){
            $user = $this->users_model->get_current($user_id, $user_email);
            $this->response($user, 200);
        }else{
            $this->response(array("data" => "Session destroyed"), 200);
        }
        
    }

    public function users_delete()
    {

    }

    public function login_get(){
        // $data = $this->post();
        // $user = $this->users_model->login($data['email'], $data['password']);
        $user = $this->users_model->login('elik101@gmail.com',  md5('elik101'));
        $this->response($user, 200);
    }

    public function register_get(){
        // $data = $this->post();
        $data = array(
            'email' => 'elik101@gmail.com',
            'first_name' => 'Elik',
            'last_name' => 'Kazav',
            'role' => 'admin',
            'password' => md5('elik101')
        );

        $this->response($this->users_model->register($data),200);
    }

    public function session_destroy_post() {
        $this->session->sess_destroy();
        $this->response(array("data"=> "logout"), 200);
    }

}
