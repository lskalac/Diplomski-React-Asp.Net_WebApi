CREATE TABLE [dbo].[Note] (
    [NoteId]   INT            IDENTITY (1, 1) NOT NULL,
    [Title]    NVARCHAR (255) NOT NULL,
    [Text]     NVARCHAR (MAX) NULL,
    [IsActive] BIT            NULL,
    CONSTRAINT [PK_Note] PRIMARY KEY CLUSTERED ([NoteId] ASC)
);



