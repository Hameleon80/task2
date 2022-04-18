import { Categories } from './constants'

export const Notes = {
    header: ["Name", "Created", "Category", "Contenet", "Dates", ""],
    notes: ['Shopping list|April 20, 2021|' + Categories.get('TASK') + '|Tomatoes, bread, butter, milk|',
        'The theory of evolution|April 27, 2021|' + Categories.get('RANDOM_THOUGHT') + '|The theory of evolution is a shortened form of the term “theory of evolution by natural selection,” which was proposed by Charles Darwin and Alfred Russel Wallace in the nineteenth century.|',
        'New Feature|May 05, 2021|' + Categories.get('IDEA') + '|Implement new feature 3/5/2021. Dont forget say this to boss 5/5/2021|3/5/2021 , 5/5/2021',
        'Shopping list 2|June 16, 2021|' + Categories.get('TASK') + '|Bread, eggs, cucumber, sour cream, onion, tomatoes|',
        'Don\'t forget|Jule 09, 2021|' + Categories.get('RANDOM_THOUGHT') + '|Don\'t forget to wish Tom a happy birthday|',
        'How improve engine|Jule 29, 2021|' + Categories.get('IDEA') + '|Change valve travel|',
        'Poetry|September 29, 2021|' + Categories.get('RANDOM_THOUGHT') + '|On the sole Arabian tree, Herald sad and trumpet be, To whose sound chaste wings obey| ',
    ]
};

export const Archive = {
    header: ['Note Category', 'Active', 'Archived'],
    notes:['How improve engine|Jule 29, 2021|' + Categories.get('IDEA') + '|Change valve travel|' ]
}