array_to_search_through = []
for number in range(1, 1001):
    array_to_search_through.append(number)

def linear_search(value_to_find, array_to_search_through):
    # your code here
    #print(array_to_search_through)     
    #create list to append index to 
    match_index_list = []
    #start negative one
    index = -1
    for i in array_to_search_through:
        #position 1 here becomes index 0 CS method
        index += 1 
        if value_to_find == i:
            match_index_list.append(index)
    return match_index_list        
        



#call my function
print(linear_search(19,array_to_search_through))   