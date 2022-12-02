{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = 'paul';
  const address: Text = 'korea';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'paul',
    age: 12,
  };

  /**
   * String Literal Types
   */
  type Name = 'name';
  let paulName: Name;
  paulName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';

  type True = true;

  let sure: True = true
}
