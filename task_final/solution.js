function sendRequest(name, phone, address, goods, sum) {                          
                                                                                 
    let data = {
        data: {
            client: "",
            goods: [],
            order: {}
        }   
    };
   
    data.client =  `${name} ${phone}`;
  
    data.order = {address: `${address.street, address.house, address.entrance, address.floor, address.flat}`, sum: sum};

    let countOfGoods = goods.length;                          
                                                                   
        for (let i = 0; i < countOfGoods; i += 1) {                        
            data.goods.push({title: goods[i].title, count: goods[i].count});                           
        };                                                                    
    
    let jsonData = JSON.stringify(data);                   
                                                           
    return jsonData;                                        
}                                                        


                    
                                                                            
                                                                     
                                                                                    
                                                                        
                                            
                                                                    
                                                                        
                                                                          
                                                                    
                                                                    
                                                                        
                                                                         
                                                                 
                                                                
                                                                 
                                                                 
                                                                         
                                                                 