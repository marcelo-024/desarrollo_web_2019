<?php

$limite = 10;
$acumulador = 0;
$maximo = 100;
$counter = 0;


for ($i = 0; $i < $limite;$i++) //i++ === i=i+1
{ $counter = $i
     echo $i
    if ($acumulador + ($i*$i) > $maximo) {
        break
    }
    
    $acumulador += + ($i*$i)
}
   
echo $acumulador.','.$counter