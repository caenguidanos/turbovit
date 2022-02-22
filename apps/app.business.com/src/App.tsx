import { Button, ButtonColor, ButtonProps, ButtonSize } from "ui-button";

export const App: React.FunctionComponent = () => {
   let props: ButtonProps = {
      data: {
         text: "Click me!",
      },
      styles: { size: ButtonSize.Medium, color: ButtonColor.Primary },
   };

   return (
      <div className="theme-light">
         <Button {...props} />
      </div>
   );
};

export default App;
