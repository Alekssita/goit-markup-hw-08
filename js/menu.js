
 ( ( )  =>  {
    const  mobileMenu  =  документ . querySelector ( '.js-меню-контейнер' ) ;
    const  openMenuBtn  =  документ . querySelector ( '.js-open-menu' ) ;
    const  closeMenuBtn  =  документ . querySelector ( '.js-close-menu' ) ;
  
     константа toggleMenu  = (  ) =  >  {
       константа  isMenuOpen =
        openMenuBtn . getAttribute ( 'aria-expanded' )  ===  'true'  ||  ложный ;
      openMenuBtn . setAttribute ( 'aria-expanded' ,  ! isMenuOpen ) ;
      мобильное меню . список классов . toggle ( 'is-open' ) ;
  
      const  scrollLockMethod  =  ! isMenuOpen
        ? 'отключить прокрутку тела'
        : 'enableBodyScroll' ;
      bodyScrollLock [ scrollLockMethod ] ( документ.тело ) ; _ _
    } ;
  
    openMenuBtn . addEventListener ( 'щелчок' ,  toggleMenu ) ;
    закрытьMenuBtn . addEventListener ( 'щелчок' ,  toggleMenu ) ;
  
    // Закрываем мобильное меню на более широких экранах, если меняется ориентация устройства
    окно . matchMedia ( '(мин. ширина: 768 пикселей)' ) . addEventListener ( 'изменить' ,  e  =>  {
      если  ( ! e . соответствует )  return ;
      мобильное меню . список классов . удалить ( «открыто» ) ;
      openMenuBtn . setAttribute ( 'расширенная ария' ,  ложь ) ;
      бодискролллокк . enableBodyScroll ( документ.тело ) ; _ _
    } ) ;
  } ) ( ) ;