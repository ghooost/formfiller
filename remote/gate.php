<?php
switch($_REQUEST['action']){
  case 'data':
    $out=array(
      'f0'=>$_REQUEST['id'],
      'f1'=>'Иван Иванович',
      'f2'=>'что-то там'
    );
    header("Access-Control-Allow-Origin: *");
    echo  json_encode($out);
  break;
  case 'submit':
    print_r($_FILES);
    print_r($_REQUEST);
  break;
}

?>
