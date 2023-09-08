import { ChangeEvent, useEffect, useState } from "react";
import { ICategory, ITask } from "../types/idnex";
import { createTask, deleteTask, getCategories, getTasks, updateTask } from "../api";
import { Badge, Box, Button, Input, Select, Textarea } from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Checkbox,
  CheckboxGroup,
  Text
} from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import './allTasks.css'





export const Tasks = () => {
  const [todos , setTodos] = useState<ITask[]>([]);
  const [title, setTitle] = useState<string>(``);
  const [description, setDescriptopn] = useState<string>(``);
  const [categories, setCategories] = useState<ICategory[]>([])
  const [category, setCategory] = useState<number | undefined>(undefined)

  async function fetchTasks (){
    getTasks().then(data=>setTodos(data))
  } 

  useEffect (()=>{
    (async () => {
      await fetchTasks();
      const categories = await getCategories()
      setCategories(categories)
    })()
  }, [setCategories])


  const createNewTask = (e: any) => {
    setTitle(e.target.value);
  }

   const addTodo = async () => {
    try{
    const dto = {title, description}
    await createTask(category? {
      ...dto, category_id: category 
    }: dto)
    await fetchTasks()}
    catch (error){
        alert ('Error')
    }
  };

  const toggleTodo = async (id: number, checked: boolean)=>{
    try {
        await updateTask(id, {is_completed:checked})
        await fetchTasks()
    }
    catch {alert('error')}
  } 

   const deleteTodo = async (id: number) => {
    await deleteTask(id)
    await fetchTasks()
  };
  const handleTodoChange = (todo: ITask) => (event: ChangeEvent<HTMLInputElement>)=>toggleTodo(todo.id, event.target.checked)
  return (
    <div className="container">
      <Box className="input-wrapper" display='flex' flexDirection='column' gap='10px'>
      <Input 
          focusBorderColor='lime'
          placeholder='Название задачи'type="text"
          name="todo"
          value={title}
          onChange={createNewTask} />
          
        <Textarea placeholder='Описание задачи'value={description}
        onChange={(e) => {
            setDescriptopn(e.target.value);
          }} />

        <Select placeholder='Выберите категорию' value={category} onChange={event=> setCategory(Number(event.target.value))}>
          {categories.map(category =>(
            <option value={category.id}>{category.title}</option>
          ))}
        </Select>
        <Button colorScheme='green' className="add-button" onClick={addTodo}>
          Добавить
        </Button>
      </Box>

      {todos?.length > 0 ? (
        <div className="todo-list">
            <div className="allTask"><h4>Ваши задачи</h4></div>
          {todos.map((todo, index) => (
            <div className="todo">
            <div className="task-box" key={todo.id}> 
              <h3 className="">Название: {todo.title}</h3>
                <h2>Описание: {todo.description}</h2>
                  {todo.category && <p>Категория: {todo.category.title}</p>}
                  <Checkbox size='lg' colorScheme='green' checked={todo.is_completed} onChange={handleTodoChange(todo)}>
                      <Text as={`${todo.is_completed?'del' : 'b'}`}>Выполнено</Text>
                  </Checkbox>
                  <div className="">              <Popover>
                    <PopoverTrigger>
                    <Button colorScheme='red' >Удалить</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader><WarningIcon boxSize={5}/>Удалить?<WarningIcon boxSize={5}/> </PopoverHeader>
                      <PopoverBody><Button colorScheme='red' className="delete-button" onClick={()=>{deleteTodo(todo.id)}}>ДА!</Button></PopoverBody>
                      </PopoverContent>
                  </Popover></div>
            </div>

            </div>
          ))}
        </div>
      ) : (
        <div className="empty">
          <div className="badge-wrapper">
              <Badge fontSize='2em' variant='outline' colorScheme='green'>
                  Задач нет
              </Badge>
          </div>
        </div>
      )}
    </div>
  );
};
