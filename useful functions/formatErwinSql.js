let sql = `

CREATE TABLE [Airplane]
( 
	[Id]                 varchar(20)  NOT NULL ,
	[Total_no_of_seats]  int(6)  NULL ,
	[Name]               varchar(20)  NULL 
)
go

CREATE TABLE [Airplane_Type]
( 
	[Name]               varchar(20)  NOT NULL ,
	[Company]            varchar(20)  NULL ,
	[Max_seats]          int(6)  NULL 
)
go

CREATE TABLE [Airport]
( 
	[Code]               varchar(20)  NOT NULL ,
	[City]               varchar(18)  NULL ,
	[State]              varchar(18)  NULL ,
	[Name]               varchar(18)  NULL 
)
go

CREATE TABLE [Can_Land]
( 
	[Code]               varchar(20)  NOT NULL ,
	[Name]               varchar(20)  NOT NULL 
)
go

CREATE TABLE [Civil_Airplane]
( 
	[Model]              varchar(20)  NULL ,
	[Milage]             int(18)  NULL ,
	[Id]                 varchar(20)  NOT NULL 
)
go

CREATE TABLE [Fare]
( 
	[Code]               varchar(20)  NOT NULL ,
	[Restrictions]       varchar(20)  NULL ,
	[Amount]             int(10)  NULL ,
	[Number]             int(18)  NOT NULL 
)
go

CREATE TABLE [Flight]
( 
	[Number]             int(18)  NOT NULL ,
	[Airline]            varchar(20)  NULL ,
	[Weekdays]           date  NULL 
)
go

CREATE TABLE [Flight_Leg]
( 
	[Leg_no]             int(18)  NOT NULL ,
	[Dep_A.Sch_time]     date  NULL ,
	[Arr_A.Sch_time]     date  NULL ,
	[Number]             int(18)  NOT NULL ,
	[Dep.Code]           varchar(20)  NOT NULL ,
	[Arr.Code]           varchar(20)  NOT NULL 
)
go

CREATE TABLE [Leg_Instance]
( 
	[Leg_inst.Date]      date  NOT NULL ,
	[Dep.time]           date  NULL ,
	[Arr.time]           date  NULL ,
	[No_of_avail_seats]  int(6)  NULL ,
	[Id]                 varchar(20)  NOT NULL ,
	[Leg_no]             int(18)  NOT NULL ,
	[Number]             int(18)  NOT NULL ,
	[Dep.Code]           varchar(20)  NULL ,
	[Arr.Code]           varchar(20)  NULL 
)
go

CREATE TABLE [Seat]
( 
	[Seat_no]            int(6)  NOT NULL ,
	[Customer_name]      varchar(20)  NULL ,
	[Cphone]             varchar(20)  NULL ,
	[Leg_inst.Date]      date  NOT NULL ,
	[Leg_no]             int(18)  NOT NULL ,
	[Number]             int(18)  NOT NULL 
)
go

CREATE TABLE [Tourism_Airplane]
( 
	[Model]              varchar(20)  NULL ,
	[Year]               int(4)  NULL ,
	[Id]                 varchar(20)  NOT NULL 
)
go

ALTER TABLE [Airplane]
	ADD CONSTRAINT [XPKAirplane] PRIMARY KEY  CLUSTERED ([Id] ASC)
go

ALTER TABLE [Airplane_Type]
	ADD CONSTRAINT [XPKAirplane_Type] PRIMARY KEY  CLUSTERED ([Name] ASC)
go

ALTER TABLE [Airport]
	ADD CONSTRAINT [XPKAirport] PRIMARY KEY  CLUSTERED ([Code] ASC)
go

ALTER TABLE [Can_Land]
	ADD CONSTRAINT [XPKCan_Land] PRIMARY KEY  CLUSTERED ([Code] ASC,[Name] ASC)
go

ALTER TABLE [Civil_Airplane]
	ADD CONSTRAINT [XPKCivil_Airplane] PRIMARY KEY  CLUSTERED ([Id] ASC)
go

ALTER TABLE [Fare]
	ADD CONSTRAINT [XPKFare] PRIMARY KEY  CLUSTERED ([Code] ASC,[Number] ASC)
go

ALTER TABLE [Flight]
	ADD CONSTRAINT [XPKFlight] PRIMARY KEY  CLUSTERED ([Number] ASC)
go

ALTER TABLE [Flight_Leg]
	ADD CONSTRAINT [XPKFlight_Leg] PRIMARY KEY  CLUSTERED ([Leg_no] ASC,[Number] ASC)
go

ALTER TABLE [Leg_Instance]
	ADD CONSTRAINT [XPKLeg_Instance] PRIMARY KEY  CLUSTERED ([Leg_inst.Date] ASC,[Leg_no] ASC,[Number] ASC)
go

ALTER TABLE [Seat]
	ADD CONSTRAINT [XPKSeat] PRIMARY KEY  CLUSTERED ([Seat_no] ASC,[Leg_inst.Date] ASC,[Leg_no] ASC,[Number] ASC)
go

ALTER TABLE [Tourism_Airplane]
	ADD CONSTRAINT [XPKTourism_Airplane] PRIMARY KEY  CLUSTERED ([Id] ASC)
go


ALTER TABLE [Airplane]
	ADD CONSTRAINT [Type] FOREIGN KEY ([Name]) REFERENCES [Airplane_Type]([Name])
		ON DELETE NO ACTION
		ON UPDATE NO ACTION
go


ALTER TABLE [Can_Land]
	ADD CONSTRAINT [.] FOREIGN KEY ([Code]) REFERENCES [Airport]([Code])
		ON DELETE NO ACTION
		ON UPDATE NO ACTION
go

ALTER TABLE [Can_Land]
	ADD CONSTRAINT [.] FOREIGN KEY ([Name]) REFERENCES [Airplane_Type]([Name])
		ON DELETE NO ACTION
		ON UPDATE NO ACTION
go


ALTER TABLE [Civil_Airplane]
	ADD CONSTRAINT [IS_A] FOREIGN KEY ([Id]) REFERENCES [Airplane]([Id])
		ON DELETE CASCADE
		ON UPDATE CASCADE
go


ALTER TABLE [Fare]
	ADD CONSTRAINT [Fares] FOREIGN KEY ([Number]) REFERENCES [Flight]([Number])
		ON DELETE NO ACTION
		ON UPDATE NO ACTION
go


ALTER TABLE [Flight_Leg]
	ADD CONSTRAINT [Legs] FOREIGN KEY ([Number]) REFERENCES [Flight]([Number])
		ON DELETE NO ACTION
		ON UPDATE NO ACTION
go

ALTER TABLE [Flight_Leg]
	ADD CONSTRAINT [Dep_Airport] FOREIGN KEY ([Dep.Code]) REFERENCES [Airport]([Code])
		ON DELETE NO ACTION
		ON UPDATE NO ACTION
go

ALTER TABLE [Flight_Leg]
	ADD CONSTRAINT [Arr_Airport] FOREIGN KEY ([Arr.Code]) REFERENCES [Airport]([Code])
		ON DELETE NO ACTION
		ON UPDATE NO ACTION
go


ALTER TABLE [Leg_Instance]
	ADD CONSTRAINT [Assigned] FOREIGN KEY ([Id]) REFERENCES [Airplane]([Id])
		ON DELETE NO ACTION
		ON UPDATE NO ACTION
go

ALTER TABLE [Leg_Instance]
	ADD CONSTRAINT [Instance_of] FOREIGN KEY ([Leg_no],[Number]) REFERENCES [Flight_Leg]([Leg_no],[Number])
		ON DELETE NO ACTION
		ON UPDATE NO ACTION
go

ALTER TABLE [Leg_Instance]
	ADD CONSTRAINT [Departs] FOREIGN KEY ([Dep.Code]) REFERENCES [Airport]([Code])
		ON DELETE NO ACTION
		ON UPDATE NO ACTION
go

ALTER TABLE [Leg_Instance]
	ADD CONSTRAINT [Arrives] FOREIGN KEY ([Arr.Code]) REFERENCES [Airport]([Code])
		ON DELETE NO ACTION
		ON UPDATE NO ACTION
go


ALTER TABLE [Seat]
	ADD CONSTRAINT [Reservation] FOREIGN KEY ([Leg_inst.Date],[Leg_no],[Number]) REFERENCES [Leg_Instance]([Leg_inst.Date],[Leg_no],[Number])
		ON DELETE NO ACTION
		ON UPDATE NO ACTION
go


ALTER TABLE [Tourism_Airplane]
	ADD CONSTRAINT [IS_A] FOREIGN KEY ([Id]) REFERENCES [Airplane]([Id])
		ON DELETE CASCADE
		ON UPDATE CASCADE
go


CREATE TRIGGER tD_Airplane ON Airplane FOR DELETE AS
/* erwin Builtin Trigger */
/* DELETE trigger on Airplane */
BEGIN
  DECLARE  @errno   int,
           @severity int,
           @state    int,
           @errmsg  varchar(255)
    /* erwin Builtin Trigger */
    /* Airplane  Leg_Instance on parent delete no action */
    /* ERWIN_RELATION:CHECKSUM="0003b4e4", PARENT_OWNER="", PARENT_TABLE="Airplane"
    CHILD_OWNER="", CHILD_TABLE="Leg_Instance"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Assigned", FK_COLUMNS="Id" */
    IF EXISTS (
      SELECT * FROM deleted,Leg_Instance
      WHERE
        /*  %JoinFKPK(Leg_Instance,deleted," = "," AND") */
        Leg_Instance.Id = deleted.Id
    )
    BEGIN
      SELECT @errno  = 30001,
             @errmsg = 'Cannot delete Airplane because Leg_Instance exists.'
      GOTO error
    END

    /* erwin Builtin Trigger */
    /* Airplane  Tourism_Airplane on parent delete cascade */
    /* ERWIN_RELATION:CHECKSUM="00000000", PARENT_OWNER="", PARENT_TABLE="Airplane"
    CHILD_OWNER="", CHILD_TABLE="Tourism_Airplane"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="IS_A", FK_COLUMNS="Id" */
    DELETE Tourism_Airplane
      FROM Tourism_Airplane,deleted
      WHERE
        /*  %JoinFKPK(Tourism_Airplane,deleted," = "," AND") */
        Tourism_Airplane.Id = deleted.Id

    /* erwin Builtin Trigger */
    /* Airplane  Civil_Airplane on parent delete cascade */
    /* ERWIN_RELATION:CHECKSUM="00000000", PARENT_OWNER="", PARENT_TABLE="Airplane"
    CHILD_OWNER="", CHILD_TABLE="Civil_Airplane"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="IS_A", FK_COLUMNS="Id" */
    DELETE Civil_Airplane
      FROM Civil_Airplane,deleted
      WHERE
        /*  %JoinFKPK(Civil_Airplane,deleted," = "," AND") */
        Civil_Airplane.Id = deleted.Id

    /* erwin Builtin Trigger */
    /* Airplane_Type  Airplane on child delete no action */
    /* ERWIN_RELATION:CHECKSUM="00000000", PARENT_OWNER="", PARENT_TABLE="Airplane_Type"
    CHILD_OWNER="", CHILD_TABLE="Airplane"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Type", FK_COLUMNS="Name" */
    IF EXISTS (SELECT * FROM deleted,Airplane_Type
      WHERE
        /* %JoinFKPK(deleted,Airplane_Type," = "," AND") */
        deleted.Name = Airplane_Type.Name AND
        NOT EXISTS (
          SELECT * FROM Airplane
          WHERE
            /* %JoinFKPK(Airplane,Airplane_Type," = "," AND") */
            Airplane.Name = Airplane_Type.Name
        )
    )
    BEGIN
      SELECT @errno  = 30010,
             @errmsg = 'Cannot delete last Airplane because Airplane_Type exists.'
      GOTO error
    END


    /* erwin Builtin Trigger */
    RETURN
error:
   RAISERROR (@errmsg, -- Message text.
              @severity, -- Severity (0~25).
              @state) -- State (0~255).
    rollback transaction
END

go


CREATE TRIGGER tU_Airplane ON Airplane FOR UPDATE AS
/* erwin Builtin Trigger */
/* UPDATE trigger on Airplane */
BEGIN
  DECLARE  @numrows int,
           @nullcnt int,
           @validcnt int,
           @insId varchar(20),
           @errno   int,
           @severity int,
           @state    int,
           @errmsg  varchar(255)

  SELECT @numrows = @@rowcount
  /* erwin Builtin Trigger */
  /* Airplane  Leg_Instance on parent update no action */
  /* ERWIN_RELATION:CHECKSUM="000539bc", PARENT_OWNER="", PARENT_TABLE="Airplane"
    CHILD_OWNER="", CHILD_TABLE="Leg_Instance"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Assigned", FK_COLUMNS="Id" */
  IF
    /* %ParentPK(" OR",UPDATE) */
    UPDATE(Id)
  BEGIN
    IF EXISTS (
      SELECT * FROM deleted,Leg_Instance
      WHERE
        /*  %JoinFKPK(Leg_Instance,deleted," = "," AND") */
        Leg_Instance.Id = deleted.Id
    )
    BEGIN
      SELECT @errno  = 30005,
             @errmsg = 'Cannot update Airplane because Leg_Instance exists.'
      GOTO error
    END
  END

  /* erwin Builtin Trigger */
  /* Airplane  Tourism_Airplane on parent update cascade */
  /* ERWIN_RELATION:CHECKSUM="00000000", PARENT_OWNER="", PARENT_TABLE="Airplane"
    CHILD_OWNER="", CHILD_TABLE="Tourism_Airplane"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="IS_A", FK_COLUMNS="Id" */
  IF
    /* %ParentPK(" OR",UPDATE) */
    UPDATE(Id)
  BEGIN
    IF @numrows = 1
    BEGIN
      SELECT @insId = inserted.Id
        FROM inserted
      UPDATE Tourism_Airplane
      SET
        /*  %JoinFKPK(Tourism_Airplane,@ins," = ",",") */
        Tourism_Airplane.Id = @insId
      FROM Tourism_Airplane,inserted,deleted
      WHERE
        /*  %JoinFKPK(Tourism_Airplane,deleted," = "," AND") */
        Tourism_Airplane.Id = deleted.Id
    END
    ELSE
    BEGIN
      SELECT @errno = 30006,
             @errmsg = 'Cannot cascade Airplane update because more than one row has been affected.'
      GOTO error
    END
  END

  /* erwin Builtin Trigger */
  /* Airplane  Civil_Airplane on parent update cascade */
  /* ERWIN_RELATION:CHECKSUM="00000000", PARENT_OWNER="", PARENT_TABLE="Airplane"
    CHILD_OWNER="", CHILD_TABLE="Civil_Airplane"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="IS_A", FK_COLUMNS="Id" */
  IF
    /* %ParentPK(" OR",UPDATE) */
    UPDATE(Id)
  BEGIN
    IF @numrows = 1
    BEGIN
      SELECT @insId = inserted.Id
        FROM inserted
      UPDATE Civil_Airplane
      SET
        /*  %JoinFKPK(Civil_Airplane,@ins," = ",",") */
        Civil_Airplane.Id = @insId
      FROM Civil_Airplane,inserted,deleted
      WHERE
        /*  %JoinFKPK(Civil_Airplane,deleted," = "," AND") */
        Civil_Airplane.Id = deleted.Id
    END
    ELSE
    BEGIN
      SELECT @errno = 30006,
             @errmsg = 'Cannot cascade Airplane update because more than one row has been affected.'
      GOTO error
    END
  END

  /* erwin Builtin Trigger */
  /* Airplane_Type  Airplane on child update no action */
  /* ERWIN_RELATION:CHECKSUM="00000000", PARENT_OWNER="", PARENT_TABLE="Airplane_Type"
    CHILD_OWNER="", CHILD_TABLE="Airplane"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Type", FK_COLUMNS="Name" */
  IF
    /* %ChildFK(" OR",UPDATE) */
    UPDATE(Name)
  BEGIN
    SELECT @nullcnt = 0
    SELECT @validcnt = count(*)
      FROM inserted,Airplane_Type
        WHERE
          /* %JoinFKPK(inserted,Airplane_Type) */
          inserted.Name = Airplane_Type.Name
    /* %NotnullFK(inserted," IS NULL","select @nullcnt = count(*) from inserted where"," AND") */
    select @nullcnt = count(*) from inserted where
      inserted.Name IS NULL
    IF @validcnt + @nullcnt != @numrows
    BEGIN
      SELECT @errno  = 30007,
             @errmsg = 'Cannot update Airplane because Airplane_Type does not exist.'
      GOTO error
    END
  END


  /* erwin Builtin Trigger */
  RETURN
error:
   RAISERROR (@errmsg, -- Message text.
              @severity, -- Severity (0~25).
              @state) -- State (0~255).
    rollback transaction
END

go




CREATE TRIGGER tD_Airplane_Type ON Airplane_Type FOR DELETE AS
/* erwin Builtin Trigger */
/* DELETE trigger on Airplane_Type */
BEGIN
  DECLARE  @errno   int,
           @severity int,
           @state    int,
           @errmsg  varchar(255)
    /* erwin Builtin Trigger */
    /* Airplane_Type  Can_Land on parent delete no action */
    /* ERWIN_RELATION:CHECKSUM="0001f26e", PARENT_OWNER="", PARENT_TABLE="Airplane_Type"
    CHILD_OWNER="", CHILD_TABLE="Can_Land"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT=".", FK_COLUMNS="Name" */
    IF EXISTS (
      SELECT * FROM deleted,Can_Land
      WHERE
        /*  %JoinFKPK(Can_Land,deleted," = "," AND") */
        Can_Land.Name = deleted.Name
    )
    BEGIN
      SELECT @errno  = 30001,
             @errmsg = 'Cannot delete Airplane_Type because Can_Land exists.'
      GOTO error
    END

    /* erwin Builtin Trigger */
    /* Airplane_Type  Airplane on parent delete no action */
    /* ERWIN_RELATION:CHECKSUM="00000000", PARENT_OWNER="", PARENT_TABLE="Airplane_Type"
    CHILD_OWNER="", CHILD_TABLE="Airplane"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Type", FK_COLUMNS="Name" */
    IF EXISTS (
      SELECT * FROM deleted,Airplane
      WHERE
        /*  %JoinFKPK(Airplane,deleted," = "," AND") */
        Airplane.Name = deleted.Name
    )
    BEGIN
      SELECT @errno  = 30001,
             @errmsg = 'Cannot delete Airplane_Type because Airplane exists.'
      GOTO error
    END


    /* erwin Builtin Trigger */
    RETURN
error:
   RAISERROR (@errmsg, -- Message text.
              @severity, -- Severity (0~25).
              @state) -- State (0~255).
    rollback transaction
END

go


CREATE TRIGGER tU_Airplane_Type ON Airplane_Type FOR UPDATE AS
/* erwin Builtin Trigger */
/* UPDATE trigger on Airplane_Type */
BEGIN
  DECLARE  @numrows int,
           @nullcnt int,
           @validcnt int,
           @insName varchar(20),
           @errno   int,
           @severity int,
           @state    int,
           @errmsg  varchar(255)

  SELECT @numrows = @@rowcount
  /* erwin Builtin Trigger */
  /* Airplane_Type  Can_Land on parent update no action */
  /* ERWIN_RELATION:CHECKSUM="000221dd", PARENT_OWNER="", PARENT_TABLE="Airplane_Type"
    CHILD_OWNER="", CHILD_TABLE="Can_Land"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT=".", FK_COLUMNS="Name" */
  IF
    /* %ParentPK(" OR",UPDATE) */
    UPDATE(Name)
  BEGIN
    IF EXISTS (
      SELECT * FROM deleted,Can_Land
      WHERE
        /*  %JoinFKPK(Can_Land,deleted," = "," AND") */
        Can_Land.Name = deleted.Name
    )
    BEGIN
      SELECT @errno  = 30005,
             @errmsg = 'Cannot update Airplane_Type because Can_Land exists.'
      GOTO error
    END
  END

  /* erwin Builtin Trigger */
  /* Airplane_Type  Airplane on parent update no action */
  /* ERWIN_RELATION:CHECKSUM="00000000", PARENT_OWNER="", PARENT_TABLE="Airplane_Type"
    CHILD_OWNER="", CHILD_TABLE="Airplane"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Type", FK_COLUMNS="Name" */
  IF
    /* %ParentPK(" OR",UPDATE) */
    UPDATE(Name)
  BEGIN
    IF EXISTS (
      SELECT * FROM deleted,Airplane
      WHERE
        /*  %JoinFKPK(Airplane,deleted," = "," AND") */
        Airplane.Name = deleted.Name
    )
    BEGIN
      SELECT @errno  = 30005,
             @errmsg = 'Cannot update Airplane_Type because Airplane exists.'
      GOTO error
    END
  END


  /* erwin Builtin Trigger */
  RETURN
error:
   RAISERROR (@errmsg, -- Message text.
              @severity, -- Severity (0~25).
              @state) -- State (0~255).
    rollback transaction
END

go




CREATE TRIGGER tD_Airport ON Airport FOR DELETE AS
/* erwin Builtin Trigger */
/* DELETE trigger on Airport */
BEGIN
  DECLARE  @errno   int,
           @severity int,
           @state    int,
           @errmsg  varchar(255)
    /* erwin Builtin Trigger */
    /* Airport  Leg_Instance on parent delete no action */
    /* ERWIN_RELATION:CHECKSUM="0004ae7c", PARENT_OWNER="", PARENT_TABLE="Airport"
    CHILD_OWNER="", CHILD_TABLE="Leg_Instance"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Arrives", FK_COLUMNS="Arr.Code" */
    IF EXISTS (
      SELECT * FROM deleted,Leg_Instance
      WHERE
        /*  %JoinFKPK(Leg_Instance,deleted," = "," AND") */
        Leg_Instance.Arr.Code = deleted.Code
    )
    BEGIN
      SELECT @errno  = 30001,
             @errmsg = 'Cannot delete Airport because Leg_Instance exists.'
      GOTO error
    END

    /* erwin Builtin Trigger */
    /* Airport  Leg_Instance on parent delete no action */
    /* ERWIN_RELATION:CHECKSUM="00000000", PARENT_OWNER="", PARENT_TABLE="Airport"
    CHILD_OWNER="", CHILD_TABLE="Leg_Instance"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Departs", FK_COLUMNS="Dep.Code" */
    IF EXISTS (
      SELECT * FROM deleted,Leg_Instance
      WHERE
        /*  %JoinFKPK(Leg_Instance,deleted," = "," AND") */
        Leg_Instance.Dep.Code = deleted.Code
    )
    BEGIN
      SELECT @errno  = 30001,
             @errmsg = 'Cannot delete Airport because Leg_Instance exists.'
      GOTO error
    END

    /* erwin Builtin Trigger */
    /* Airport  Flight_Leg on parent delete no action */
    /* ERWIN_RELATION:CHECKSUM="00000000", PARENT_OWNER="", PARENT_TABLE="Airport"
    CHILD_OWNER="", CHILD_TABLE="Flight_Leg"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Arr_Airport", FK_COLUMNS="Arr.Code" */
    IF EXISTS (
      SELECT * FROM deleted,Flight_Leg
      WHERE
        /*  %JoinFKPK(Flight_Leg,deleted," = "," AND") */
        Flight_Leg.Arr.Code = deleted.Code
    )
    BEGIN
      SELECT @errno  = 30001,
             @errmsg = 'Cannot delete Airport because Flight_Leg exists.'
      GOTO error
    END

    /* erwin Builtin Trigger */
    /* Airport  Flight_Leg on parent delete no action */
    /* ERWIN_RELATION:CHECKSUM="00000000", PARENT_OWNER="", PARENT_TABLE="Airport"
    CHILD_OWNER="", CHILD_TABLE="Flight_Leg"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Dep_Airport", FK_COLUMNS="Dep.Code" */
    IF EXISTS (
      SELECT * FROM deleted,Flight_Leg
      WHERE
        /*  %JoinFKPK(Flight_Leg,deleted," = "," AND") */
        Flight_Leg.Dep.Code = deleted.Code
    )
    BEGIN
      SELECT @errno  = 30001,
             @errmsg = 'Cannot delete Airport because Flight_Leg exists.'
      GOTO error
    END

    /* erwin Builtin Trigger */
    /* Airport  Can_Land on parent delete no action */
    /* ERWIN_RELATION:CHECKSUM="00000000", PARENT_OWNER="", PARENT_TABLE="Airport"
    CHILD_OWNER="", CHILD_TABLE="Can_Land"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT=".", FK_COLUMNS="Code" */
    IF EXISTS (
      SELECT * FROM deleted,Can_Land
      WHERE
        /*  %JoinFKPK(Can_Land,deleted," = "," AND") */
        Can_Land.Code = deleted.Code
    )
    BEGIN
      SELECT @errno  = 30001,
             @errmsg = 'Cannot delete Airport because Can_Land exists.'
      GOTO error
    END


    /* erwin Builtin Trigger */
    RETURN
error:
   RAISERROR (@errmsg, -- Message text.
              @severity, -- Severity (0~25).
              @state) -- State (0~255).
    rollback transaction
END

go


CREATE TRIGGER tU_Airport ON Airport FOR UPDATE AS
/* erwin Builtin Trigger */
/* UPDATE trigger on Airport */
BEGIN
  DECLARE  @numrows int,
           @nullcnt int,
           @validcnt int,
           @insCode varchar(20),
           @errno   int,
           @severity int,
           @state    int,
           @errmsg  varchar(255)

  SELECT @numrows = @@rowcount
  /* erwin Builtin Trigger */
  /* Airport  Leg_Instance on parent update no action */
  /* ERWIN_RELATION:CHECKSUM="000537d1", PARENT_OWNER="", PARENT_TABLE="Airport"
    CHILD_OWNER="", CHILD_TABLE="Leg_Instance"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Arrives", FK_COLUMNS="Arr.Code" */
  IF
    /* %ParentPK(" OR",UPDATE) */
    UPDATE(Code)
  BEGIN
    IF EXISTS (
      SELECT * FROM deleted,Leg_Instance
      WHERE
        /*  %JoinFKPK(Leg_Instance,deleted," = "," AND") */
        Leg_Instance.Arr.Code = deleted.Code
    )
    BEGIN
      SELECT @errno  = 30005,
             @errmsg = 'Cannot update Airport because Leg_Instance exists.'
      GOTO error
    END
  END

  /* erwin Builtin Trigger */
  /* Airport  Leg_Instance on parent update no action */
  /* ERWIN_RELATION:CHECKSUM="00000000", PARENT_OWNER="", PARENT_TABLE="Airport"
    CHILD_OWNER="", CHILD_TABLE="Leg_Instance"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Departs", FK_COLUMNS="Dep.Code" */
  IF
    /* %ParentPK(" OR",UPDATE) */
    UPDATE(Code)
  BEGIN
    IF EXISTS (
      SELECT * FROM deleted,Leg_Instance
      WHERE
        /*  %JoinFKPK(Leg_Instance,deleted," = "," AND") */
        Leg_Instance.Dep.Code = deleted.Code
    )
    BEGIN
      SELECT @errno  = 30005,
             @errmsg = 'Cannot update Airport because Leg_Instance exists.'
      GOTO error
    END
  END

  /* erwin Builtin Trigger */
  /* Airport  Flight_Leg on parent update no action */
  /* ERWIN_RELATION:CHECKSUM="00000000", PARENT_OWNER="", PARENT_TABLE="Airport"
    CHILD_OWNER="", CHILD_TABLE="Flight_Leg"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Arr_Airport", FK_COLUMNS="Arr.Code" */
  IF
    /* %ParentPK(" OR",UPDATE) */
    UPDATE(Code)
  BEGIN
    IF EXISTS (
      SELECT * FROM deleted,Flight_Leg
      WHERE
        /*  %JoinFKPK(Flight_Leg,deleted," = "," AND") */
        Flight_Leg.Arr.Code = deleted.Code
    )
    BEGIN
      SELECT @errno  = 30005,
             @errmsg = 'Cannot update Airport because Flight_Leg exists.'
      GOTO error
    END
  END

  /* erwin Builtin Trigger */
  /* Airport  Flight_Leg on parent update no action */
  /* ERWIN_RELATION:CHECKSUM="00000000", PARENT_OWNER="", PARENT_TABLE="Airport"
    CHILD_OWNER="", CHILD_TABLE="Flight_Leg"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Dep_Airport", FK_COLUMNS="Dep.Code" */
  IF
    /* %ParentPK(" OR",UPDATE) */
    UPDATE(Code)
  BEGIN
    IF EXISTS (
      SELECT * FROM deleted,Flight_Leg
      WHERE
        /*  %JoinFKPK(Flight_Leg,deleted," = "," AND") */
        Flight_Leg.Dep.Code = deleted.Code
    )
    BEGIN
      SELECT @errno  = 30005,
             @errmsg = 'Cannot update Airport because Flight_Leg exists.'
      GOTO error
    END
  END

  /* erwin Builtin Trigger */
  /* Airport  Can_Land on parent update no action */
  /* ERWIN_RELATION:CHECKSUM="00000000", PARENT_OWNER="", PARENT_TABLE="Airport"
    CHILD_OWNER="", CHILD_TABLE="Can_Land"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT=".", FK_COLUMNS="Code" */
  IF
    /* %ParentPK(" OR",UPDATE) */
    UPDATE(Code)
  BEGIN
    IF EXISTS (
      SELECT * FROM deleted,Can_Land
      WHERE
        /*  %JoinFKPK(Can_Land,deleted," = "," AND") */
        Can_Land.Code = deleted.Code
    )
    BEGIN
      SELECT @errno  = 30005,
             @errmsg = 'Cannot update Airport because Can_Land exists.'
      GOTO error
    END
  END


  /* erwin Builtin Trigger */
  RETURN
error:
   RAISERROR (@errmsg, -- Message text.
              @severity, -- Severity (0~25).
              @state) -- State (0~255).
    rollback transaction
END

go




CREATE TRIGGER tD_Can_Land ON Can_Land FOR DELETE AS
/* erwin Builtin Trigger */
/* DELETE trigger on Can_Land */
BEGIN
  DECLARE  @errno   int,
           @severity int,
           @state    int,
           @errmsg  varchar(255)
    /* erwin Builtin Trigger */
    /* Airplane_Type  Can_Land on child delete no action */
    /* ERWIN_RELATION:CHECKSUM="0002649f", PARENT_OWNER="", PARENT_TABLE="Airplane_Type"
    CHILD_OWNER="", CHILD_TABLE="Can_Land"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT=".", FK_COLUMNS="Name" */
    IF EXISTS (SELECT * FROM deleted,Airplane_Type
      WHERE
        /* %JoinFKPK(deleted,Airplane_Type," = "," AND") */
        deleted.Name = Airplane_Type.Name AND
        NOT EXISTS (
          SELECT * FROM Can_Land
          WHERE
            /* %JoinFKPK(Can_Land,Airplane_Type," = "," AND") */
            Can_Land.Name = Airplane_Type.Name
        )
    )
    BEGIN
      SELECT @errno  = 30010,
             @errmsg = 'Cannot delete last Can_Land because Airplane_Type exists.'
      GOTO error
    END

    /* erwin Builtin Trigger */
    /* Airport  Can_Land on child delete no action */
    /* ERWIN_RELATION:CHECKSUM="00000000", PARENT_OWNER="", PARENT_TABLE="Airport"
    CHILD_OWNER="", CHILD_TABLE="Can_Land"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT=".", FK_COLUMNS="Code" */
    IF EXISTS (SELECT * FROM deleted,Airport
      WHERE
        /* %JoinFKPK(deleted,Airport," = "," AND") */
        deleted.Code = Airport.Code AND
        NOT EXISTS (
          SELECT * FROM Can_Land
          WHERE
            /* %JoinFKPK(Can_Land,Airport," = "," AND") */
            Can_Land.Code = Airport.Code
        )
    )
    BEGIN
      SELECT @errno  = 30010,
             @errmsg = 'Cannot delete last Can_Land because Airport exists.'
      GOTO error
    END


    /* erwin Builtin Trigger */
    RETURN
error:
   RAISERROR (@errmsg, -- Message text.
              @severity, -- Severity (0~25).
              @state) -- State (0~255).
    rollback transaction
END

go


CREATE TRIGGER tU_Can_Land ON Can_Land FOR UPDATE AS
/* erwin Builtin Trigger */
/* UPDATE trigger on Can_Land */
BEGIN
  DECLARE  @numrows int,
           @nullcnt int,
           @validcnt int,
           @insCode varchar(20), 
           @insName varchar(20),
           @errno   int,
           @severity int,
           @state    int,
           @errmsg  varchar(255)

  SELECT @numrows = @@rowcount
  /* erwin Builtin Trigger */
  /* Airplane_Type  Can_Land on child update no action */
  /* ERWIN_RELATION:CHECKSUM="00029d71", PARENT_OWNER="", PARENT_TABLE="Airplane_Type"
    CHILD_OWNER="", CHILD_TABLE="Can_Land"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT=".", FK_COLUMNS="Name" */
  IF
    /* %ChildFK(" OR",UPDATE) */
    UPDATE(Name)
  BEGIN
    SELECT @nullcnt = 0
    SELECT @validcnt = count(*)
      FROM inserted,Airplane_Type
        WHERE
          /* %JoinFKPK(inserted,Airplane_Type) */
          inserted.Name = Airplane_Type.Name
    /* %NotnullFK(inserted," IS NULL","select @nullcnt = count(*) from inserted where"," AND") */
    
    IF @validcnt + @nullcnt != @numrows
    BEGIN
      SELECT @errno  = 30007,
             @errmsg = 'Cannot update Can_Land because Airplane_Type does not exist.'
      GOTO error
    END
  END

  /* erwin Builtin Trigger */
  /* Airport  Can_Land on child update no action */
  /* ERWIN_RELATION:CHECKSUM="00000000", PARENT_OWNER="", PARENT_TABLE="Airport"
    CHILD_OWNER="", CHILD_TABLE="Can_Land"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT=".", FK_COLUMNS="Code" */
  IF
    /* %ChildFK(" OR",UPDATE) */
    UPDATE(Code)
  BEGIN
    SELECT @nullcnt = 0
    SELECT @validcnt = count(*)
      FROM inserted,Airport
        WHERE
          /* %JoinFKPK(inserted,Airport) */
          inserted.Code = Airport.Code
    /* %NotnullFK(inserted," IS NULL","select @nullcnt = count(*) from inserted where"," AND") */
    
    IF @validcnt + @nullcnt != @numrows
    BEGIN
      SELECT @errno  = 30007,
             @errmsg = 'Cannot update Can_Land because Airport does not exist.'
      GOTO error
    END
  END


  /* erwin Builtin Trigger */
  RETURN
error:
   RAISERROR (@errmsg, -- Message text.
              @severity, -- Severity (0~25).
              @state) -- State (0~255).
    rollback transaction
END

go




CREATE TRIGGER tD_Civil_Airplane ON Civil_Airplane FOR DELETE AS
/* erwin Builtin Trigger */
/* DELETE trigger on Civil_Airplane */
BEGIN
  DECLARE  @errno   int,
           @severity int,
           @state    int,
           @errmsg  varchar(255)
    /* erwin Builtin Trigger */
    /* Airplane  Civil_Airplane on child delete no action */
    /* ERWIN_RELATION:CHECKSUM="00014f0e", PARENT_OWNER="", PARENT_TABLE="Airplane"
    CHILD_OWNER="", CHILD_TABLE="Civil_Airplane"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="IS_A", FK_COLUMNS="Id" */
    IF EXISTS (SELECT * FROM deleted,Airplane
      WHERE
        /* %JoinFKPK(deleted,Airplane," = "," AND") */
        deleted.Id = Airplane.Id AND
        NOT EXISTS (
          SELECT * FROM Civil_Airplane
          WHERE
            /* %JoinFKPK(Civil_Airplane,Airplane," = "," AND") */
            Civil_Airplane.Id = Airplane.Id
        )
    )
    BEGIN
      SELECT @errno  = 30010,
             @errmsg = 'Cannot delete last Civil_Airplane because Airplane exists.'
      GOTO error
    END


    /* erwin Builtin Trigger */
    RETURN
error:
   RAISERROR (@errmsg, -- Message text.
              @severity, -- Severity (0~25).
              @state) -- State (0~255).
    rollback transaction
END

go


CREATE TRIGGER tU_Civil_Airplane ON Civil_Airplane FOR UPDATE AS
/* erwin Builtin Trigger */
/* UPDATE trigger on Civil_Airplane */
BEGIN
  DECLARE  @numrows int,
           @nullcnt int,
           @validcnt int,
           @insId varchar(20),
           @errno   int,
           @severity int,
           @state    int,
           @errmsg  varchar(255)

  SELECT @numrows = @@rowcount
  /* erwin Builtin Trigger */
  /* Airplane  Civil_Airplane on child update no action */
  /* ERWIN_RELATION:CHECKSUM="000167de", PARENT_OWNER="", PARENT_TABLE="Airplane"
    CHILD_OWNER="", CHILD_TABLE="Civil_Airplane"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="IS_A", FK_COLUMNS="Id" */
  IF
    /* %ChildFK(" OR",UPDATE) */
    UPDATE(Id)
  BEGIN
    SELECT @nullcnt = 0
    SELECT @validcnt = count(*)
      FROM inserted,Airplane
        WHERE
          /* %JoinFKPK(inserted,Airplane) */
          inserted.Id = Airplane.Id
    /* %NotnullFK(inserted," IS NULL","select @nullcnt = count(*) from inserted where"," AND") */
    
    IF @validcnt + @nullcnt != @numrows
    BEGIN
      SELECT @errno  = 30007,
             @errmsg = 'Cannot update Civil_Airplane because Airplane does not exist.'
      GOTO error
    END
  END


  /* erwin Builtin Trigger */
  RETURN
error:
   RAISERROR (@errmsg, -- Message text.
              @severity, -- Severity (0~25).
              @state) -- State (0~255).
    rollback transaction
END

go




CREATE TRIGGER tD_Fare ON Fare FOR DELETE AS
/* erwin Builtin Trigger */
/* DELETE trigger on Fare */
BEGIN
  DECLARE  @errno   int,
           @severity int,
           @state    int,
           @errmsg  varchar(255)
    /* erwin Builtin Trigger */
    /* Flight  Fare on child delete no action */
    /* ERWIN_RELATION:CHECKSUM="00012a26", PARENT_OWNER="", PARENT_TABLE="Flight"
    CHILD_OWNER="", CHILD_TABLE="Fare"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Fares", FK_COLUMNS="Number" */
    IF EXISTS (SELECT * FROM deleted,Flight
      WHERE
        /* %JoinFKPK(deleted,Flight," = "," AND") */
        deleted.Number = Flight.Number AND
        NOT EXISTS (
          SELECT * FROM Fare
          WHERE
            /* %JoinFKPK(Fare,Flight," = "," AND") */
            Fare.Number = Flight.Number
        )
    )
    BEGIN
      SELECT @errno  = 30010,
             @errmsg = 'Cannot delete last Fare because Flight exists.'
      GOTO error
    END


    /* erwin Builtin Trigger */
    RETURN
error:
   RAISERROR (@errmsg, -- Message text.
              @severity, -- Severity (0~25).
              @state) -- State (0~255).
    rollback transaction
END

go


CREATE TRIGGER tU_Fare ON Fare FOR UPDATE AS
/* erwin Builtin Trigger */
/* UPDATE trigger on Fare */
BEGIN
  DECLARE  @numrows int,
           @nullcnt int,
           @validcnt int,
           @insCode varchar(20), 
           @insNumber int(18),
           @errno   int,
           @severity int,
           @state    int,
           @errmsg  varchar(255)

  SELECT @numrows = @@rowcount
  /* erwin Builtin Trigger */
  /* Flight  Fare on child update no action */
  /* ERWIN_RELATION:CHECKSUM="00014ed3", PARENT_OWNER="", PARENT_TABLE="Flight"
    CHILD_OWNER="", CHILD_TABLE="Fare"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Fares", FK_COLUMNS="Number" */
  IF
    /* %ChildFK(" OR",UPDATE) */
    UPDATE(Number)
  BEGIN
    SELECT @nullcnt = 0
    SELECT @validcnt = count(*)
      FROM inserted,Flight
        WHERE
          /* %JoinFKPK(inserted,Flight) */
          inserted.Number = Flight.Number
    /* %NotnullFK(inserted," IS NULL","select @nullcnt = count(*) from inserted where"," AND") */
    
    IF @validcnt + @nullcnt != @numrows
    BEGIN
      SELECT @errno  = 30007,
             @errmsg = 'Cannot update Fare because Flight does not exist.'
      GOTO error
    END
  END


  /* erwin Builtin Trigger */
  RETURN
error:
   RAISERROR (@errmsg, -- Message text.
              @severity, -- Severity (0~25).
              @state) -- State (0~255).
    rollback transaction
END

go




CREATE TRIGGER tD_Flight ON Flight FOR DELETE AS
/* erwin Builtin Trigger */
/* DELETE trigger on Flight */
BEGIN
  DECLARE  @errno   int,
           @severity int,
           @state    int,
           @errmsg  varchar(255)
    /* erwin Builtin Trigger */
    /* Flight  Flight_Leg on parent delete no action */
    /* ERWIN_RELATION:CHECKSUM="0001ece1", PARENT_OWNER="", PARENT_TABLE="Flight"
    CHILD_OWNER="", CHILD_TABLE="Flight_Leg"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Legs", FK_COLUMNS="Number" */
    IF EXISTS (
      SELECT * FROM deleted,Flight_Leg
      WHERE
        /*  %JoinFKPK(Flight_Leg,deleted," = "," AND") */
        Flight_Leg.Number = deleted.Number
    )
    BEGIN
      SELECT @errno  = 30001,
             @errmsg = 'Cannot delete Flight because Flight_Leg exists.'
      GOTO error
    END

    /* erwin Builtin Trigger */
    /* Flight  Fare on parent delete no action */
    /* ERWIN_RELATION:CHECKSUM="00000000", PARENT_OWNER="", PARENT_TABLE="Flight"
    CHILD_OWNER="", CHILD_TABLE="Fare"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Fares", FK_COLUMNS="Number" */
    IF EXISTS (
      SELECT * FROM deleted,Fare
      WHERE
        /*  %JoinFKPK(Fare,deleted," = "," AND") */
        Fare.Number = deleted.Number
    )
    BEGIN
      SELECT @errno  = 30001,
             @errmsg = 'Cannot delete Flight because Fare exists.'
      GOTO error
    END


    /* erwin Builtin Trigger */
    RETURN
error:
   RAISERROR (@errmsg, -- Message text.
              @severity, -- Severity (0~25).
              @state) -- State (0~255).
    rollback transaction
END

go


CREATE TRIGGER tU_Flight ON Flight FOR UPDATE AS
/* erwin Builtin Trigger */
/* UPDATE trigger on Flight */
BEGIN
  DECLARE  @numrows int,
           @nullcnt int,
           @validcnt int,
           @insNumber int(18),
           @errno   int,
           @severity int,
           @state    int,
           @errmsg  varchar(255)

  SELECT @numrows = @@rowcount
  /* erwin Builtin Trigger */
  /* Flight  Flight_Leg on parent update no action */
  /* ERWIN_RELATION:CHECKSUM="00020adf", PARENT_OWNER="", PARENT_TABLE="Flight"
    CHILD_OWNER="", CHILD_TABLE="Flight_Leg"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Legs", FK_COLUMNS="Number" */
  IF
    /* %ParentPK(" OR",UPDATE) */
    UPDATE(Number)
  BEGIN
    IF EXISTS (
      SELECT * FROM deleted,Flight_Leg
      WHERE
        /*  %JoinFKPK(Flight_Leg,deleted," = "," AND") */
        Flight_Leg.Number = deleted.Number
    )
    BEGIN
      SELECT @errno  = 30005,
             @errmsg = 'Cannot update Flight because Flight_Leg exists.'
      GOTO error
    END
  END

  /* erwin Builtin Trigger */
  /* Flight  Fare on parent update no action */
  /* ERWIN_RELATION:CHECKSUM="00000000", PARENT_OWNER="", PARENT_TABLE="Flight"
    CHILD_OWNER="", CHILD_TABLE="Fare"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Fares", FK_COLUMNS="Number" */
  IF
    /* %ParentPK(" OR",UPDATE) */
    UPDATE(Number)
  BEGIN
    IF EXISTS (
      SELECT * FROM deleted,Fare
      WHERE
        /*  %JoinFKPK(Fare,deleted," = "," AND") */
        Fare.Number = deleted.Number
    )
    BEGIN
      SELECT @errno  = 30005,
             @errmsg = 'Cannot update Flight because Fare exists.'
      GOTO error
    END
  END


  /* erwin Builtin Trigger */
  RETURN
error:
   RAISERROR (@errmsg, -- Message text.
              @severity, -- Severity (0~25).
              @state) -- State (0~255).
    rollback transaction
END

go




CREATE TRIGGER tD_Flight_Leg ON Flight_Leg FOR DELETE AS
/* erwin Builtin Trigger */
/* DELETE trigger on Flight_Leg */
BEGIN
  DECLARE  @errno   int,
           @severity int,
           @state    int,
           @errmsg  varchar(255)
    /* erwin Builtin Trigger */
    /* Flight_Leg  Leg_Instance on parent delete no action */
    /* ERWIN_RELATION:CHECKSUM="00048e20", PARENT_OWNER="", PARENT_TABLE="Flight_Leg"
    CHILD_OWNER="", CHILD_TABLE="Leg_Instance"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Instance_of", FK_COLUMNS="Leg_no""Number" */
    IF EXISTS (
      SELECT * FROM deleted,Leg_Instance
      WHERE
        /*  %JoinFKPK(Leg_Instance,deleted," = "," AND") */
        Leg_Instance.Leg_no = deleted.Leg_no AND
        Leg_Instance.Number = deleted.Number
    )
    BEGIN
      SELECT @errno  = 30001,
             @errmsg = 'Cannot delete Flight_Leg because Leg_Instance exists.'
      GOTO error
    END

    /* erwin Builtin Trigger */
    /* Airport  Flight_Leg on child delete no action */
    /* ERWIN_RELATION:CHECKSUM="00000000", PARENT_OWNER="", PARENT_TABLE="Airport"
    CHILD_OWNER="", CHILD_TABLE="Flight_Leg"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Arr_Airport", FK_COLUMNS="Arr.Code" */
    IF EXISTS (SELECT * FROM deleted,Airport
      WHERE
        /* %JoinFKPK(deleted,Airport," = "," AND") */
        deleted.Arr.Code = Airport.Code AND
        NOT EXISTS (
          SELECT * FROM Flight_Leg
          WHERE
            /* %JoinFKPK(Flight_Leg,Airport," = "," AND") */
            Flight_Leg.Arr.Code = Airport.Code
        )
    )
    BEGIN
      SELECT @errno  = 30010,
             @errmsg = 'Cannot delete last Flight_Leg because Airport exists.'
      GOTO error
    END

    /* erwin Builtin Trigger */
    /* Airport  Flight_Leg on child delete no action */
    /* ERWIN_RELATION:CHECKSUM="00000000", PARENT_OWNER="", PARENT_TABLE="Airport"
    CHILD_OWNER="", CHILD_TABLE="Flight_Leg"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Dep_Airport", FK_COLUMNS="Dep.Code" */
    IF EXISTS (SELECT * FROM deleted,Airport
      WHERE
        /* %JoinFKPK(deleted,Airport," = "," AND") */
        deleted.Dep.Code = Airport.Code AND
        NOT EXISTS (
          SELECT * FROM Flight_Leg
          WHERE
            /* %JoinFKPK(Flight_Leg,Airport," = "," AND") */
            Flight_Leg.Dep.Code = Airport.Code
        )
    )
    BEGIN
      SELECT @errno  = 30010,
             @errmsg = 'Cannot delete last Flight_Leg because Airport exists.'
      GOTO error
    END

    /* erwin Builtin Trigger */
    /* Flight  Flight_Leg on child delete no action */
    /* ERWIN_RELATION:CHECKSUM="00000000", PARENT_OWNER="", PARENT_TABLE="Flight"
    CHILD_OWNER="", CHILD_TABLE="Flight_Leg"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Legs", FK_COLUMNS="Number" */
    IF EXISTS (SELECT * FROM deleted,Flight
      WHERE
        /* %JoinFKPK(deleted,Flight," = "," AND") */
        deleted.Number = Flight.Number AND
        NOT EXISTS (
          SELECT * FROM Flight_Leg
          WHERE
            /* %JoinFKPK(Flight_Leg,Flight," = "," AND") */
            Flight_Leg.Number = Flight.Number
        )
    )
    BEGIN
      SELECT @errno  = 30010,
             @errmsg = 'Cannot delete last Flight_Leg because Flight exists.'
      GOTO error
    END


    /* erwin Builtin Trigger */
    RETURN
error:
   RAISERROR (@errmsg, -- Message text.
              @severity, -- Severity (0~25).
              @state) -- State (0~255).
    rollback transaction
END

go


CREATE TRIGGER tU_Flight_Leg ON Flight_Leg FOR UPDATE AS
/* erwin Builtin Trigger */
/* UPDATE trigger on Flight_Leg */
BEGIN
  DECLARE  @numrows int,
           @nullcnt int,
           @validcnt int,
           @insLeg_no int(18), 
           @insNumber int(18),
           @errno   int,
           @severity int,
           @state    int,
           @errmsg  varchar(255)

  SELECT @numrows = @@rowcount
  /* erwin Builtin Trigger */
  /* Flight_Leg  Leg_Instance on parent update no action */
  /* ERWIN_RELATION:CHECKSUM="0005645f", PARENT_OWNER="", PARENT_TABLE="Flight_Leg"
    CHILD_OWNER="", CHILD_TABLE="Leg_Instance"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Instance_of", FK_COLUMNS="Leg_no""Number" */
  IF
    /* %ParentPK(" OR",UPDATE) */
    UPDATE(Leg_no) OR
    UPDATE(Number)
  BEGIN
    IF EXISTS (
      SELECT * FROM deleted,Leg_Instance
      WHERE
        /*  %JoinFKPK(Leg_Instance,deleted," = "," AND") */
        Leg_Instance.Leg_no = deleted.Leg_no AND
        Leg_Instance.Number = deleted.Number
    )
    BEGIN
      SELECT @errno  = 30005,
             @errmsg = 'Cannot update Flight_Leg because Leg_Instance exists.'
      GOTO error
    END
  END

  /* erwin Builtin Trigger */
  /* Airport  Flight_Leg on child update no action */
  /* ERWIN_RELATION:CHECKSUM="00000000", PARENT_OWNER="", PARENT_TABLE="Airport"
    CHILD_OWNER="", CHILD_TABLE="Flight_Leg"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Arr_Airport", FK_COLUMNS="Arr.Code" */
  IF
    /* %ChildFK(" OR",UPDATE) */
    UPDATE(Arr.Code)
  BEGIN
    SELECT @nullcnt = 0
    SELECT @validcnt = count(*)
      FROM inserted,Airport
        WHERE
          /* %JoinFKPK(inserted,Airport) */
          inserted.Arr.Code = Airport.Code
    /* %NotnullFK(inserted," IS NULL","select @nullcnt = count(*) from inserted where"," AND") */
    select @nullcnt = count(*) from inserted where
      inserted.Arr.Code IS NULL
    IF @validcnt + @nullcnt != @numrows
    BEGIN
      SELECT @errno  = 30007,
             @errmsg = 'Cannot update Flight_Leg because Airport does not exist.'
      GOTO error
    END
  END

  /* erwin Builtin Trigger */
  /* Airport  Flight_Leg on child update no action */
  /* ERWIN_RELATION:CHECKSUM="00000000", PARENT_OWNER="", PARENT_TABLE="Airport"
    CHILD_OWNER="", CHILD_TABLE="Flight_Leg"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Dep_Airport", FK_COLUMNS="Dep.Code" */
  IF
    /* %ChildFK(" OR",UPDATE) */
    UPDATE(Dep.Code)
  BEGIN
    SELECT @nullcnt = 0
    SELECT @validcnt = count(*)
      FROM inserted,Airport
        WHERE
          /* %JoinFKPK(inserted,Airport) */
          inserted.Dep.Code = Airport.Code
    /* %NotnullFK(inserted," IS NULL","select @nullcnt = count(*) from inserted where"," AND") */
    select @nullcnt = count(*) from inserted where
      inserted.Dep.Code IS NULL
    IF @validcnt + @nullcnt != @numrows
    BEGIN
      SELECT @errno  = 30007,
             @errmsg = 'Cannot update Flight_Leg because Airport does not exist.'
      GOTO error
    END
  END

  /* erwin Builtin Trigger */
  /* Flight  Flight_Leg on child update no action */
  /* ERWIN_RELATION:CHECKSUM="00000000", PARENT_OWNER="", PARENT_TABLE="Flight"
    CHILD_OWNER="", CHILD_TABLE="Flight_Leg"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Legs", FK_COLUMNS="Number" */
  IF
    /* %ChildFK(" OR",UPDATE) */
    UPDATE(Number)
  BEGIN
    SELECT @nullcnt = 0
    SELECT @validcnt = count(*)
      FROM inserted,Flight
        WHERE
          /* %JoinFKPK(inserted,Flight) */
          inserted.Number = Flight.Number
    /* %NotnullFK(inserted," IS NULL","select @nullcnt = count(*) from inserted where"," AND") */
    
    IF @validcnt + @nullcnt != @numrows
    BEGIN
      SELECT @errno  = 30007,
             @errmsg = 'Cannot update Flight_Leg because Flight does not exist.'
      GOTO error
    END
  END


  /* erwin Builtin Trigger */
  RETURN
error:
   RAISERROR (@errmsg, -- Message text.
              @severity, -- Severity (0~25).
              @state) -- State (0~255).
    rollback transaction
END

go




CREATE TRIGGER tD_Leg_Instance ON Leg_Instance FOR DELETE AS
/* erwin Builtin Trigger */
/* DELETE trigger on Leg_Instance */
BEGIN
  DECLARE  @errno   int,
           @severity int,
           @state    int,
           @errmsg  varchar(255)
    /* erwin Builtin Trigger */
    /* Leg_Instance  Seat on parent delete no action */
    /* ERWIN_RELATION:CHECKSUM="000601fc", PARENT_OWNER="", PARENT_TABLE="Leg_Instance"
    CHILD_OWNER="", CHILD_TABLE="Seat"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Reservation", FK_COLUMNS="Leg_inst.Date""Leg_no""Number" */
    IF EXISTS (
      SELECT * FROM deleted,Seat
      WHERE
        /*  %JoinFKPK(Seat,deleted," = "," AND") */
        Seat.Leg_inst.Date = deleted.Leg_inst.Date AND
        Seat.Leg_no = deleted.Leg_no AND
        Seat.Number = deleted.Number
    )
    BEGIN
      SELECT @errno  = 30001,
             @errmsg = 'Cannot delete Leg_Instance because Seat exists.'
      GOTO error
    END

    /* erwin Builtin Trigger */
    /* Airport  Leg_Instance on child delete no action */
    /* ERWIN_RELATION:CHECKSUM="00000000", PARENT_OWNER="", PARENT_TABLE="Airport"
    CHILD_OWNER="", CHILD_TABLE="Leg_Instance"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Arrives", FK_COLUMNS="Arr.Code" */
    IF EXISTS (SELECT * FROM deleted,Airport
      WHERE
        /* %JoinFKPK(deleted,Airport," = "," AND") */
        deleted.Arr.Code = Airport.Code AND
        NOT EXISTS (
          SELECT * FROM Leg_Instance
          WHERE
            /* %JoinFKPK(Leg_Instance,Airport," = "," AND") */
            Leg_Instance.Arr.Code = Airport.Code
        )
    )
    BEGIN
      SELECT @errno  = 30010,
             @errmsg = 'Cannot delete last Leg_Instance because Airport exists.'
      GOTO error
    END

    /* erwin Builtin Trigger */
    /* Airport  Leg_Instance on child delete no action */
    /* ERWIN_RELATION:CHECKSUM="00000000", PARENT_OWNER="", PARENT_TABLE="Airport"
    CHILD_OWNER="", CHILD_TABLE="Leg_Instance"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Departs", FK_COLUMNS="Dep.Code" */
    IF EXISTS (SELECT * FROM deleted,Airport
      WHERE
        /* %JoinFKPK(deleted,Airport," = "," AND") */
        deleted.Dep.Code = Airport.Code AND
        NOT EXISTS (
          SELECT * FROM Leg_Instance
          WHERE
            /* %JoinFKPK(Leg_Instance,Airport," = "," AND") */
            Leg_Instance.Dep.Code = Airport.Code
        )
    )
    BEGIN
      SELECT @errno  = 30010,
             @errmsg = 'Cannot delete last Leg_Instance because Airport exists.'
      GOTO error
    END

    /* erwin Builtin Trigger */
    /* Flight_Leg  Leg_Instance on child delete no action */
    /* ERWIN_RELATION:CHECKSUM="00000000", PARENT_OWNER="", PARENT_TABLE="Flight_Leg"
    CHILD_OWNER="", CHILD_TABLE="Leg_Instance"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Instance_of", FK_COLUMNS="Leg_no""Number" */
    IF EXISTS (SELECT * FROM deleted,Flight_Leg
      WHERE
        /* %JoinFKPK(deleted,Flight_Leg," = "," AND") */
        deleted.Leg_no = Flight_Leg.Leg_no AND
        deleted.Number = Flight_Leg.Number AND
        NOT EXISTS (
          SELECT * FROM Leg_Instance
          WHERE
            /* %JoinFKPK(Leg_Instance,Flight_Leg," = "," AND") */
            Leg_Instance.Leg_no = Flight_Leg.Leg_no AND
            Leg_Instance.Number = Flight_Leg.Number
        )
    )
    BEGIN
      SELECT @errno  = 30010,
             @errmsg = 'Cannot delete last Leg_Instance because Flight_Leg exists.'
      GOTO error
    END

    /* erwin Builtin Trigger */
    /* Airplane  Leg_Instance on child delete no action */
    /* ERWIN_RELATION:CHECKSUM="00000000", PARENT_OWNER="", PARENT_TABLE="Airplane"
    CHILD_OWNER="", CHILD_TABLE="Leg_Instance"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Assigned", FK_COLUMNS="Id" */
    IF EXISTS (SELECT * FROM deleted,Airplane
      WHERE
        /* %JoinFKPK(deleted,Airplane," = "," AND") */
        deleted.Id = Airplane.Id AND
        NOT EXISTS (
          SELECT * FROM Leg_Instance
          WHERE
            /* %JoinFKPK(Leg_Instance,Airplane," = "," AND") */
            Leg_Instance.Id = Airplane.Id
        )
    )
    BEGIN
      SELECT @errno  = 30010,
             @errmsg = 'Cannot delete last Leg_Instance because Airplane exists.'
      GOTO error
    END


    /* erwin Builtin Trigger */
    RETURN
error:
   RAISERROR (@errmsg, -- Message text.
              @severity, -- Severity (0~25).
              @state) -- State (0~255).
    rollback transaction
END

go


CREATE TRIGGER tU_Leg_Instance ON Leg_Instance FOR UPDATE AS
/* erwin Builtin Trigger */
/* UPDATE trigger on Leg_Instance */
BEGIN
  DECLARE  @numrows int,
           @nullcnt int,
           @validcnt int,
           @insLeg_inst.Date date, 
           @insLeg_no int(18), 
           @insNumber int(18),
           @errno   int,
           @severity int,
           @state    int,
           @errmsg  varchar(255)

  SELECT @numrows = @@rowcount
  /* erwin Builtin Trigger */
  /* Leg_Instance  Seat on parent update no action */
  /* ERWIN_RELATION:CHECKSUM="0006df7c", PARENT_OWNER="", PARENT_TABLE="Leg_Instance"
    CHILD_OWNER="", CHILD_TABLE="Seat"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Reservation", FK_COLUMNS="Leg_inst.Date""Leg_no""Number" */
  IF
    /* %ParentPK(" OR",UPDATE) */
    UPDATE(Leg_inst.Date) OR
    UPDATE(Leg_no) OR
    UPDATE(Number)
  BEGIN
    IF EXISTS (
      SELECT * FROM deleted,Seat
      WHERE
        /*  %JoinFKPK(Seat,deleted," = "," AND") */
        Seat.Leg_inst.Date = deleted.Leg_inst.Date AND
        Seat.Leg_no = deleted.Leg_no AND
        Seat.Number = deleted.Number
    )
    BEGIN
      SELECT @errno  = 30005,
             @errmsg = 'Cannot update Leg_Instance because Seat exists.'
      GOTO error
    END
  END

  /* erwin Builtin Trigger */
  /* Airport  Leg_Instance on child update no action */
  /* ERWIN_RELATION:CHECKSUM="00000000", PARENT_OWNER="", PARENT_TABLE="Airport"
    CHILD_OWNER="", CHILD_TABLE="Leg_Instance"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Arrives", FK_COLUMNS="Arr.Code" */
  IF
    /* %ChildFK(" OR",UPDATE) */
    UPDATE(Arr.Code)
  BEGIN
    SELECT @nullcnt = 0
    SELECT @validcnt = count(*)
      FROM inserted,Airport
        WHERE
          /* %JoinFKPK(inserted,Airport) */
          inserted.Arr.Code = Airport.Code
    /* %NotnullFK(inserted," IS NULL","select @nullcnt = count(*) from inserted where"," AND") */
    select @nullcnt = count(*) from inserted where
      inserted.Arr.Code IS NULL
    IF @validcnt + @nullcnt != @numrows
    BEGIN
      SELECT @errno  = 30007,
             @errmsg = 'Cannot update Leg_Instance because Airport does not exist.'
      GOTO error
    END
  END

  /* erwin Builtin Trigger */
  /* Airport  Leg_Instance on child update no action */
  /* ERWIN_RELATION:CHECKSUM="00000000", PARENT_OWNER="", PARENT_TABLE="Airport"
    CHILD_OWNER="", CHILD_TABLE="Leg_Instance"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Departs", FK_COLUMNS="Dep.Code" */
  IF
    /* %ChildFK(" OR",UPDATE) */
    UPDATE(Dep.Code)
  BEGIN
    SELECT @nullcnt = 0
    SELECT @validcnt = count(*)
      FROM inserted,Airport
        WHERE
          /* %JoinFKPK(inserted,Airport) */
          inserted.Dep.Code = Airport.Code
    /* %NotnullFK(inserted," IS NULL","select @nullcnt = count(*) from inserted where"," AND") */
    select @nullcnt = count(*) from inserted where
      inserted.Dep.Code IS NULL
    IF @validcnt + @nullcnt != @numrows
    BEGIN
      SELECT @errno  = 30007,
             @errmsg = 'Cannot update Leg_Instance because Airport does not exist.'
      GOTO error
    END
  END

  /* erwin Builtin Trigger */
  /* Flight_Leg  Leg_Instance on child update no action */
  /* ERWIN_RELATION:CHECKSUM="00000000", PARENT_OWNER="", PARENT_TABLE="Flight_Leg"
    CHILD_OWNER="", CHILD_TABLE="Leg_Instance"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Instance_of", FK_COLUMNS="Leg_no""Number" */
  IF
    /* %ChildFK(" OR",UPDATE) */
    UPDATE(Leg_no) OR
    UPDATE(Number)
  BEGIN
    SELECT @nullcnt = 0
    SELECT @validcnt = count(*)
      FROM inserted,Flight_Leg
        WHERE
          /* %JoinFKPK(inserted,Flight_Leg) */
          inserted.Leg_no = Flight_Leg.Leg_no and
          inserted.Number = Flight_Leg.Number
    /* %NotnullFK(inserted," IS NULL","select @nullcnt = count(*) from inserted where"," AND") */
    
    IF @validcnt + @nullcnt != @numrows
    BEGIN
      SELECT @errno  = 30007,
             @errmsg = 'Cannot update Leg_Instance because Flight_Leg does not exist.'
      GOTO error
    END
  END

  /* erwin Builtin Trigger */
  /* Airplane  Leg_Instance on child update no action */
  /* ERWIN_RELATION:CHECKSUM="00000000", PARENT_OWNER="", PARENT_TABLE="Airplane"
    CHILD_OWNER="", CHILD_TABLE="Leg_Instance"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Assigned", FK_COLUMNS="Id" */
  IF
    /* %ChildFK(" OR",UPDATE) */
    UPDATE(Id)
  BEGIN
    SELECT @nullcnt = 0
    SELECT @validcnt = count(*)
      FROM inserted,Airplane
        WHERE
          /* %JoinFKPK(inserted,Airplane) */
          inserted.Id = Airplane.Id
    /* %NotnullFK(inserted," IS NULL","select @nullcnt = count(*) from inserted where"," AND") */
    select @nullcnt = count(*) from inserted where
      inserted.Id IS NULL
    IF @validcnt + @nullcnt != @numrows
    BEGIN
      SELECT @errno  = 30007,
             @errmsg = 'Cannot update Leg_Instance because Airplane does not exist.'
      GOTO error
    END
  END


  /* erwin Builtin Trigger */
  RETURN
error:
   RAISERROR (@errmsg, -- Message text.
              @severity, -- Severity (0~25).
              @state) -- State (0~255).
    rollback transaction
END

go




CREATE TRIGGER tD_Seat ON Seat FOR DELETE AS
/* erwin Builtin Trigger */
/* DELETE trigger on Seat */
BEGIN
  DECLARE  @errno   int,
           @severity int,
           @state    int,
           @errmsg  varchar(255)
    /* erwin Builtin Trigger */
    /* Leg_Instance  Seat on child delete no action */
    /* ERWIN_RELATION:CHECKSUM="0001a3ec", PARENT_OWNER="", PARENT_TABLE="Leg_Instance"
    CHILD_OWNER="", CHILD_TABLE="Seat"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Reservation", FK_COLUMNS="Leg_inst.Date""Leg_no""Number" */
    IF EXISTS (SELECT * FROM deleted,Leg_Instance
      WHERE
        /* %JoinFKPK(deleted,Leg_Instance," = "," AND") */
        deleted.Leg_inst.Date = Leg_Instance.Leg_inst.Date AND
        deleted.Leg_no = Leg_Instance.Leg_no AND
        deleted.Number = Leg_Instance.Number AND
        NOT EXISTS (
          SELECT * FROM Seat
          WHERE
            /* %JoinFKPK(Seat,Leg_Instance," = "," AND") */
            Seat.Leg_inst.Date = Leg_Instance.Leg_inst.Date AND
            Seat.Leg_no = Leg_Instance.Leg_no AND
            Seat.Number = Leg_Instance.Number
        )
    )
    BEGIN
      SELECT @errno  = 30010,
             @errmsg = 'Cannot delete last Seat because Leg_Instance exists.'
      GOTO error
    END


    /* erwin Builtin Trigger */
    RETURN
error:
   RAISERROR (@errmsg, -- Message text.
              @severity, -- Severity (0~25).
              @state) -- State (0~255).
    rollback transaction
END

go


CREATE TRIGGER tU_Seat ON Seat FOR UPDATE AS
/* erwin Builtin Trigger */
/* UPDATE trigger on Seat */
BEGIN
  DECLARE  @numrows int,
           @nullcnt int,
           @validcnt int,
           @insSeat_no int(6), 
           @insLeg_inst.Date date, 
           @insLeg_no int(18), 
           @insNumber int(18),
           @errno   int,
           @severity int,
           @state    int,
           @errmsg  varchar(255)

  SELECT @numrows = @@rowcount
  /* erwin Builtin Trigger */
  /* Leg_Instance  Seat on child update no action */
  /* ERWIN_RELATION:CHECKSUM="0001c045", PARENT_OWNER="", PARENT_TABLE="Leg_Instance"
    CHILD_OWNER="", CHILD_TABLE="Seat"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="Reservation", FK_COLUMNS="Leg_inst.Date""Leg_no""Number" */
  IF
    /* %ChildFK(" OR",UPDATE) */
    UPDATE(Leg_inst.Date) OR
    UPDATE(Leg_no) OR
    UPDATE(Number)
  BEGIN
    SELECT @nullcnt = 0
    SELECT @validcnt = count(*)
      FROM inserted,Leg_Instance
        WHERE
          /* %JoinFKPK(inserted,Leg_Instance) */
          inserted.Leg_inst.Date = Leg_Instance.Leg_inst.Date and
          inserted.Leg_no = Leg_Instance.Leg_no and
          inserted.Number = Leg_Instance.Number
    /* %NotnullFK(inserted," IS NULL","select @nullcnt = count(*) from inserted where"," AND") */
    
    IF @validcnt + @nullcnt != @numrows
    BEGIN
      SELECT @errno  = 30007,
             @errmsg = 'Cannot update Seat because Leg_Instance does not exist.'
      GOTO error
    END
  END


  /* erwin Builtin Trigger */
  RETURN
error:
   RAISERROR (@errmsg, -- Message text.
              @severity, -- Severity (0~25).
              @state) -- State (0~255).
    rollback transaction
END

go




CREATE TRIGGER tD_Tourism_Airplane ON Tourism_Airplane FOR DELETE AS
/* erwin Builtin Trigger */
/* DELETE trigger on Tourism_Airplane */
BEGIN
  DECLARE  @errno   int,
           @severity int,
           @state    int,
           @errmsg  varchar(255)
    /* erwin Builtin Trigger */
    /* Airplane  Tourism_Airplane on child delete no action */
    /* ERWIN_RELATION:CHECKSUM="00014462", PARENT_OWNER="", PARENT_TABLE="Airplane"
    CHILD_OWNER="", CHILD_TABLE="Tourism_Airplane"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="IS_A", FK_COLUMNS="Id" */
    IF EXISTS (SELECT * FROM deleted,Airplane
      WHERE
        /* %JoinFKPK(deleted,Airplane," = "," AND") */
        deleted.Id = Airplane.Id AND
        NOT EXISTS (
          SELECT * FROM Tourism_Airplane
          WHERE
            /* %JoinFKPK(Tourism_Airplane,Airplane," = "," AND") */
            Tourism_Airplane.Id = Airplane.Id
        )
    )
    BEGIN
      SELECT @errno  = 30010,
             @errmsg = 'Cannot delete last Tourism_Airplane because Airplane exists.'
      GOTO error
    END


    /* erwin Builtin Trigger */
    RETURN
error:
   RAISERROR (@errmsg, -- Message text.
              @severity, -- Severity (0~25).
              @state) -- State (0~255).
    rollback transaction
END

go


CREATE TRIGGER tU_Tourism_Airplane ON Tourism_Airplane FOR UPDATE AS
/* erwin Builtin Trigger */
/* UPDATE trigger on Tourism_Airplane */
BEGIN
  DECLARE  @numrows int,
           @nullcnt int,
           @validcnt int,
           @insId varchar(20),
           @errno   int,
           @severity int,
           @state    int,
           @errmsg  varchar(255)

  SELECT @numrows = @@rowcount
  /* erwin Builtin Trigger */
  /* Airplane  Tourism_Airplane on child update no action */
  /* ERWIN_RELATION:CHECKSUM="0001617b", PARENT_OWNER="", PARENT_TABLE="Airplane"
    CHILD_OWNER="", CHILD_TABLE="Tourism_Airplane"
    P2C_VERB_PHRASE="", C2P_VERB_PHRASE="", 
    FK_CONSTRAINT="IS_A", FK_COLUMNS="Id" */
  IF
    /* %ChildFK(" OR",UPDATE) */
    UPDATE(Id)
  BEGIN
    SELECT @nullcnt = 0
    SELECT @validcnt = count(*)
      FROM inserted,Airplane
        WHERE
          /* %JoinFKPK(inserted,Airplane) */
          inserted.Id = Airplane.Id
    /* %NotnullFK(inserted," IS NULL","select @nullcnt = count(*) from inserted where"," AND") */
    
    IF @validcnt + @nullcnt != @numrows
    BEGIN
      SELECT @errno  = 30007,
             @errmsg = 'Cannot update Tourism_Airplane because Airplane does not exist.'
      GOTO error
    END
  END


  /* erwin Builtin Trigger */
  RETURN
error:
   RAISERROR (@errmsg, -- Message text.
              @severity, -- Severity (0~25).
              @state) -- State (0~255).
    rollback transaction
END

go






`

sql = sql.trim().split("go").map(elem => elem.trim());

sql = sql.map(sqlFormat);

function sqlFormat(elem){

    elem = elem.split("\n");
    elem = elem.map((row) => {
        // if(row.includes("CREATE TABLE")){
             return row.split("").filter(char => char!="[" && char !="]").join("");
        // }
        return row;
    });

    elem = elem.join("\n");

    return elem;

}

sql = sql.join("\ngo\n");

const fs = require('fs')

fs.writeFile('test.txt', sql, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})
