module.exports = app => {

    const Tasks = app.db.models.Tasks;

    app.route('/tasks')
        .get((req, res) => {
            Tasks.findAll({})
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
        })
        .post((req, res) => {   // Lo que recibo
            Tasks.create(req.body)  //lo que me dan, lo inserto en la bbdd
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({msg: error.message});  
                });
        });

        app.route('/tasks/:id')
            .get((req, res) => {
                Tasks.findOne({where: req.params}) //recibo el id
                    .then(result => res.json(result)) //obtengo un resultado de la consulta y lo devuelvo
                    .catch(error => {
                        res.status(412).json({msg: error.message});  
                    });
            })
            .put((req, res) => {
                Tasks.update(req.body, {where: req.params})
                    .then(result => res.sendStatus(204))
                    .catch(error => {
                        res.status(412).json({msg: error.message});  
                    });
            })
            .delete((req, res) => {
                Tasks.destroy({where: req.params})
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({msg: error.message});  
                });
            });

};