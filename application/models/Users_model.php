<?php

class Users_model extends CI_Model {

	public function __construct(){
		$this->load->database();
		$this->load->library('session');
	}
	
    function get_users () {
        $query = $this->db->get('users');
        $data = $query->result_array();
        return $data;
    }

    function get_current ($user_id, $user_email) {
        $this->db->where('id', $user_id);
		$this->db->where('email', $user_email);
	    $query = $this->db->get('users');
	    $data = $query->result_array();
	    unset($data[0]["password"]);
        return $data[0];
    }

    function register ($data) {
        $query = $this->db->insert('users', $data);
        return $query;
    }

    function login ($email, $password) {
		if( isset($email) && isset($password)){
			$this->db->where('email', $email);
			$this->db->where('password', $password);
	        $query = $this->db->get('users');
	        $data = $query->result_array();
	        if( !empty($data) ){
	        	return $data;	
	        }else{
	        	return false;
	        }
	        	
		}
      	return false;
    }

}

