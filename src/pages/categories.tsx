import { useState, useEffect } from "react";
import { ICategory } from "../types/idnex";
import { createCategory } from "../api/createCategory";
import { deleteCategory } from "../api/deleteCategory";
import { getCategories } from "../api/getCategories";
import { updateCategory } from "../api/updateCategory";
import { Box, Button, Input, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";


export const MainCategories = () => {
    const [categories , setCategories] = useState<ICategory[]>([]);
    const [title, setTitle] = useState<string>(``);
  
    async function fetchCategory (){
      getCategories().then(data=>setCategories(data))
    } 
  
    useEffect (()=>{
      fetchCategory()
    }, [])
  
     const addCategory = async () => {
      try{
      await createCategory({title})
      await fetchCategory()}
      catch (error){
          alert ('Error')
      }
    };
  
     const delCategory = async (id: number) => {
      await deleteCategory(id)
      await fetchCategory()
    };
  
    return (
      <div className="container">
        <Box className="input-wrapper" display='flex' flexDirection='column' gap='10px'>
        <h4>Ваши категории</h4>
  
        <div className="input-wrapper">
        <Input
            htmlSize={4} 
            max-width='1200px' 
            type="text"
            name="category"
            value={title}
            placeholder="Создать категорию"
            onChange={(e) => {
              setTitle(e.target.value);
            }} />
        </div>
        <div className=""><Button className="add-button" colorScheme='green' onClick={addCategory}>
            Добавить
          </Button></div>
  
        {categories?.length > 0 ? (
          <div className="todo-list">
            {categories.map((category, index) => (
              <div className="todo">
              <div key={category.id}> 
                <h3>{category.title}
                <div className="">
                <Popover>
                    <PopoverTrigger>
                    <Button colorScheme='red' >Удалить</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader><WarningIcon boxSize={5}/>Удалить?<WarningIcon boxSize={5}/> </PopoverHeader>
                      <PopoverBody><Button colorScheme='red' className="delete-button" onClick={()=>{delCategory(category.id)}}>ДА!</Button></PopoverBody>
                      </PopoverContent>
                  </Popover>
                </div>
                </h3>
              </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="empty">
            <p>Ваши категории пусты</p>
          </div>
        )}
        </Box>
      </div>
    );
  };