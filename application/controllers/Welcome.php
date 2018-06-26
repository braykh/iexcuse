<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->database();
		$this->load->library('session');
		$this->load->helper('form');
		$this->load->helper('url');
        $this->load->library('form_validation');
        $this->config->load('config', FALSE, TRUE);
	}

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{
		$this->form_validation->set_rules('email', 'Email', 'required');
		$this->form_validation->set_rules('password', 'Password', 'required');

        if ($this->form_validation->run() == FALSE) {
            if( isset($this->session->userdata['user_id']) && isset($this->session->userdata['user_email']) ){
                $this->load->view('home');
            }else{
                $this->load->view('login');
            }
        } else {
            $user_data = array(
            	'email' => $this->input->post('email'),
            	'password' => md5($this->input->post('password'))
            );

            $this->db->where('email', $user_data['email']);
			$this->db->where('password', $user_data['password']);
	        $query = $this->db->get('users');
	        $data = $query->result_array();
	        if( !empty($data) ){
	        	$result = TRUE;	
	        }else{
	        	$result = FALSE;
	        }

            if ($result == TRUE) {
                // Add user data in session
                $this->session->set_userdata('user_id', $data[0]['id']);
                $this->session->set_userdata('user_email', $data[0]['email']);
                // $this->load->view('home');
                redirect( $this->config->item('base_url') );

            } else {
                $data = array(
                	'error_message' => 'Invalid Email or Password'
                );
                $this->load->view('login', $data);
            }
        }
	}

}
