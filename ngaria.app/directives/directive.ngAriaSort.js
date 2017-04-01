angular.module(['NgAria']).directive('ngAriaSort', function(){
  return {
      restrict:'A',
      scope:{
        orderBy : "="
      },
      link: function(scope, element, attrs, ctrl){
        debugger
        if(attrs.ngAriaSort) {
          try {
            var currentCol = attrs.ngAriaSort;
            updateAriaAttribute();
            scope.$watch('orderBy', function(newVal, oldVal){
              updateAriaAttribute(); 
            },true);
          } catch(e) {
            console.warn('Error while paring sn-aria-sort attribute value : ' + e.toString());
          }

        }

        function updateAriaAttribute() {
          var isSorted = scope.orderBy.col == currentCol;
          var desc = scope.orderBy.desc;
          if(isSorted)
            element.attr('aria-sort',desc?"descending":"ascending");
          else
            element.removeAttr('aria-sort');
        }
      }
    }
});