<?php
    // Crio um filtro para a requisição $_GET['val'];
    $GetData = filter_input(INPUT_GET, 'val', FILTER_VALIDATE_INT);
    // Verifico se algo foi passado no $_GET['val']
    if($GetData):
        // Exibo a samo dos valores
        echo sumAll($GetData);
    endif;



    // Função responsável por calcular a soma de todos os números múltiplos por 5 e 3 menores que $val
    // @return integer
    function sumAll($val) {
        // Valor inicial da soma
        $result = 0;

        // Verifico se o valor é inteiro
        if(!is_integer($val)):
            return "{$val} não é um número inteiro";
        endif;

        // Faço um loop até o valor informado
        for($i = 0; $i < $val; $i++):
            // Verifico se o valor é dividendo por 3 ou 5
            if(!($i % 3) || !($i % 5)):
                // Caso o valor seja dividido acrescendo o valor atual do loop
                $result += $i;
            endif;
        endfor;

        // Retorno o resultado da soma
        return $result;
    }
?>
