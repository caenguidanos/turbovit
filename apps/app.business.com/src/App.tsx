import { Button, ButtonProps } from "ui";

export const App: React.FunctionComponent = () => {
   let props: ButtonProps = {
      text: "Click me!",
      color: "secondary",
      size: "small",
   };

   return (
      <div className="theme-light">
         <h1 className="text-primary">Hi</h1>

         <Button {...props} />
      </div>
   );
};

export default App;
