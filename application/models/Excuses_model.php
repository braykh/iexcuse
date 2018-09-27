<?php

class Excuses_model extends CI_Model {

	public function __construct(){
		$this->load->database();
		$this->load->library('session');
	}
	
    function get_excuses () {

        $this->db->select('categories.name, excuses.created, excuses.id, excuses.active, excuses.title, excuses.description, excuses.category_id');
        $this->db->join('categories', 'categories.id = excuses.category_id');

        $query = $this->db->get('excuses');
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

    function get_excuses_count () {
        $query = $this->db->count_all('excuses');
        return $query;
    }

    // function update_category ($id, $cat) {
    //     $category = array(
    //        'name' => $cat["name"],
    //        'active' => $cat["active"]
    //     );
    //     $this->db->where('id', $id);
    //     $query = $this->db->update('categories', $category);
    //     if($query){
    //         $this->db->where('id', $id);
    //         $query2 = $this->db->get('categories');          
    //         $data = $query2->result_array();
    //         return $data;
    //     }else{
    //         return false;
    //     }
    // }

    // function create_category ($cat) {
    //     $query = $this->db->insert('categories', $cat);
    //     if($query){
    //         return $query;
    //     }else{
    //         return false;
    //     }
    // }

    // function delete_category ($id) {
    //     $this->db->where('id', $id);
    //     $query = $this->db->delete('categories');
    //     if($query){
    //         return $query;
    //     }else{
    //         return false;
    //     }
    // }


}

