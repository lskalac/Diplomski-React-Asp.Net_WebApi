CREATE TABLE [dbo].[Task] (
    [TaskId]      INT            IDENTITY (1, 1) NOT NULL,
    [Name]        NVARCHAR (255) NOT NULL,
    [Description] NVARCHAR (MAX) NOT NULL,
    [PriorityId]  INT            NOT NULL,
    [IsCompleted] BIT            NOT NULL,
    CONSTRAINT [PK_Task] PRIMARY KEY CLUSTERED ([TaskId] ASC)
);



