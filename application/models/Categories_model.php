<?php

class Categories_model extends CI_Model {

	public function __construct(){
		$this->load->database();
		$this->load->library('session');
	}
	
    function get_categories () {
        $query = $this->db->get('categories');
        $data = $query->result_array();
        foreach ($data as $key => $value) {
        	if ($value['active'] == 1) {
        		$data[$key]['active'] = true;
        	}else{
        		$data[$key]['active'] = false;
        	}
        }
        return $data;
    }


}

